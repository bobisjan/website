FROM mcr.microsoft.com/devcontainers/javascript-node:22

WORKDIR /workspaces/website

ENV PNPM_HOME=/workspaces/pnpm
RUN corepack enable pnpm

COPY pnpm-lock.yaml ./
# COPY patches patches
