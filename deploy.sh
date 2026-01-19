#!/bin/bash
STAGE="prod"
SSH_KEY=~/.ssh/gcp_globals1_rsa
PROD_SERVER_PATH="globalso@ftp.globals.one:develop.globals.one/"

# Check if stage is valid
if [[ "$STAGE" != "prod" && "$STAGE" != "dev" ]]; then
    echo "Invalid stage: $STAGE"
    echo "Valid stages are: prod, dev"
    exit 1
fi

# Set server path based on stage
if [[ "$STAGE" == "prod" ]]; then
    SERVER_PATH="$PROD_SERVER_PATH"
fi


# Check if SSH key exists
if [ ! -f "$SSH_KEY" ]; then
    echo "SSH key not found at $SSH_KEY"
    exit 1
fi

# Build
# Increment version
npm version patch --no-git-tag-version

# Build
npm run build

# Copy files from out to server
shopt -s dotglob
scp -i $SSH_KEY -r ./out/* $SERVER_PATH

# Remove out folder
rm -rf ./out


# Commit version changes
git add package.json package-lock.json
VERSION=$(node -p "require('./package.json').version")
git commit -m "chore: bump version to $VERSION"

echo "🚀 Deployment completed successfully! Version bumped to $VERSION"