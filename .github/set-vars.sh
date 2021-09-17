BRANCH_NAME=$(echo ${GITHUB_REF#refs/heads/} | sed 's/\//_/g')
  
if [[ $BRANCH_NAME == "production" ]]; then 
  ENVIRONMENT_NAME="default"; 
elif [[ $BRANCH_NAME == "develop" ]]; then 
  ENVIRONMENT_NAME="pre-production";
else 
  ENVIRONMENT_NAME="staging"; 
fi

echo "BRANCH_NAME=$BRANCH_NAME" >> $GITHUB_ENV
echo "ENVIRONMENT_NAME=$ENVIRONMENT_NAME" >> $GITHUB_ENV