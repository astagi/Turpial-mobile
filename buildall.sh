#!/bin/bash
ant clean
$ANDROID_SDK/tools/android update project --path .
ant debug
