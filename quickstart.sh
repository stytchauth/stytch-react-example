#!/bin/bash

set -euo pipefail

backend_servers=(node python)
default_backend_server='node'

usage() {
    cat <<USAGE
usage: ${0} [backend]

Backend server options: ${backend_servers[@]} (default: ${default_backend_server})
USAGE
exit 1
}

CMD_NAME="${0}"
log() {
    echo "[${CMD_NAME}]" "${@}"
}

if [ "${1-}" == '-h' ] || [ "${1-}" == '--help' ]; then
    usage
fi

backend="${1-node}"
is_known_server=0
for server in "${backend_servers[@]}"; do
    [[ "${backend}" = "${server}" ]] && is_known_server=1
done
if [ "${is_known_server}" -ne 1 ]; then
    log "Unrecognized backend server: ${backend}"
    usage
fi

log 'Setting up Stytch example app frontend...'
pushd client || exit 1
npm install
npm run build
popd || exit 1
log 'Done! Run this command again after making changes to rebuild the frontend.'

log "Running Stytch example app backend server: ${backend}"
log ""
log "The server will start at http://localhost:9000"
log ""
case "${backend}" in
    python)
        pushd 'server/python' || exit 1
        python3 -m venv venv
        source venv/bin/activate
        pip install -r requirements.txt
        FLASK_APP=server.py python3 -m flask run --port=9000
        ;;
    node)
        pushd 'server/node' || exit 1
        npm install
        npm start
        ;;
    *)
        log "Unrecognized backend server: ${backend}"
        usage
esac
