import gcloud from 'google-cloud';

const createFakeLogger = () => ({ error: () => null });

export default function({ projectId, keyFilename, logger = createFakeLogger() }) {

    const language = gcloud.language({
        projectId,
        keyFilename
    });

    logger.debug(`Google Cloud Natural Language connected to ${projectId} project`);

    return () => ({
        annotate: (sentence, options) => new Promise((next, reject) => language.annotate(sentence, options, (err, result) => {
            if (err) {
                logger.error(err);
                reject(err);
            }

            next(result);
        })),

        detectEntities: (sentence, options) => new Promise((next, reject) => language.detectEntities(sentence, options, (err, result) => {
            if (err) {
                logger.error(err);
                reject(err);
            }

            next(result);
        })),

        detectSentiment: sentence => new Promise((next, reject) => language.detectEntities(sentence, (err, result) => {
            if (err) {
                logger.error(err);
                reject(err);
            }

            next(result);
        }))
    });
}
