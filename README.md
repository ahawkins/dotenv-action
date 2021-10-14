# dotenv action

It reads the `.env` file from the root of this repo and provides environment variables to build steps.

## Build history

[![Build history](https://buildstats.info/github/chart/falti/dotenv-action?branch=master)](https://github.com/falti/dotenv-action/actions)

## Inputs

### `path`

Override the path to the `.env` file. Default is `.env` in the repository root.

### `log-variables`

Log variables after reading from the `.env` file.

### `mask-variables`

Mask values after reading from the `.env` file.

## Example usage

    id: dotenv
    uses: ./.github/actions/dotenv-action
