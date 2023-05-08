const finishedMessage = '\
Congratulations! You fixed all the broken web pages. Well done.\n\
Thank you for trying Weblings! \n\
Hopefully, you feel ready to take the next steps in your web development \
journey.';

const welcomeMessage = '\n\
################################ \n\
###   WELCOME TO WEBLINGS!   ### \n\
################################ \n';

export default {
  dotFilesPattern: /(^|[\/\\])\../,
  flagSingleExercise: 'exercise',
  fileExtensionTests: '.test.js',
  finishedMessage,
  pathToExercises: 'exercises',
  pathToTests: 'tests',
  quitKey: 'q',
  statusBroken: 'BROKEN',
  statusFixed: 'FIXED!',
  welcomeMessage,
};
