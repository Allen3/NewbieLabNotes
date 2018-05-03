#!/bin/bash

#This scripts helps to monitor whether the SSR service which relies on python is still alive or not every 10 seconds.
MONITOR_RESULT=`ps -ef | pgrep [p]ython3.4`

OFFLINE_MSG="Service has been detected diminished!"
SUCCESSFUL_MSG="Service has been launched successfully!"

while true; do
	if [ -z "$MONITOR_RESULT" ]; then
		echo "$OFFLINE_MSG"
		./SSR.sh
		echo "$SUCCESSFUL_MSG"
	fi
  #sleep 10 seconds
	sleep 10
	echo "Checking..."
done
