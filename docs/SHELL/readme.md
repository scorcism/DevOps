### SHELL
- The way in which we talk to os is SHELL command
 
<details>
<summary>AWS resource tracker</summary>


```bash
vim aws_resource_tracker.sh

#!/bin/bash

#####################
# Author: Abhishek
# Date: 21-07-2023
#
# Version: v1
# This script will report the AWS resource usage.
#####################

set -x

# AWS S3
# AWS EC2
# AWS Lambda
# AWS IAM Users

# List s3 buckets
echo "Print list of s3 bucktes"
aws s3 ls

# List EC2 Instances
echo "Print list of ec2"
# aws ec2 describe-instances
aws ec2 describe-instances | jq '.Reservations[].Instances[].InstanceId'

# AWS Lambda 
echo "Print list of aws lambda"
aws lambda list-functions

# List IAM Users
echo "Print list of IAM Users"
aws iam list-users

```

</details>

<details>
<summary>Project using Shell Scripting | GitHub API Integration Module</summary>

- [Module code](https://github.com/devops-by-examples/Shell/blob/main/github-api-integration-module.sh)

</details>
