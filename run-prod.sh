#!/bin/ash
ln -s /save/node_modules/* ./node_modules/.
gatsby cleanga
gatsby build
gatsby serve -H 0.0.0.0