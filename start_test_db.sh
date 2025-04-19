#!/bin/bash

# This is not a production secret!
# This password is used to setup test db
PWD='admin'

if docker container inspect postgres > /dev/null 2>&1; then
  docker start postgres
else
  docker run --name postgres -e POSTGRES_PASSWORD=$PWD -d -p 5432:5432 postgres -c log_statement=all
fi