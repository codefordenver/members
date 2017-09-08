#!/bin/sh
cp project.graphcool schema.graphql
graphcool init --schema schema.graphql --name CfDMembersDev --output dev.graphcool
rm schema.graphql
