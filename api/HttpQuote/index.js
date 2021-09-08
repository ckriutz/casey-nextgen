module.exports = async function (context, req) {
    //context.log('JavaScript HTTP trigger function processed a request.');

    //const name = (req.query.name || (req.body && req.body.name));
    //const responseMessage = name
        //? "Hello, " + name + ". This HTTP triggered function executed successfully."
        //: "This HTTP triggered function executed successfully. Pass a name in the query string or in the request body for a personalized response.";

    //context.res = {
        // status: 200, /* Defaults to 200 */
        //body: responseMessage
    //};

    const data = [
        {"author":"Pranshu Midha", "quote":"Happiness should be a function without any parameters."},
        {"author":"Winston Churchill", "quote":"If you're going through hell, keep going."},
        {"author":"Kirk Douglas", "quote":"In order to achieve anything you must be brave enough to fail."},
        {"author":"Alan Kay", "quote":"The most disastrous thing that you can ever learn is your first programming language."},
        {"author":"Raghu Venkatesh", "quote":"If you can write \"hello world\" you can change the world."},
        {"author":"Unknown", "quote":"Be brave enough to suck at something new."},
        {"author":"Scott Adams", "quote":"Engineers like to solve problems, if there are no problems available, they will create their own."}
    ]

    quoteLength = data.length;
    context.res.json(data[getRandomInt(quoteLength)]);
}

// This will give us a random number between 0 and the max.
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}