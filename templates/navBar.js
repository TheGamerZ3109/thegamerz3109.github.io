const template = document.createElement('template');

template.innerHTML = `
    <head>
        <link rel="stylesheet" href="style.css">
    </head>

    <body>
        <link rel="stylesheet" href="style.css">

        <sideFrame>
            <innerFrameTextH>
                Pages:
            </innerFrameTextH>
            <br>
            <br>
            <innerFrameText>
                <a href="home.html">Home</a>
                <br>
                <br>
                <br>
                <br>
                <a href="aboutme.html">About Me</a>
                <br>
                <br>
                <br>
                <br>
                <a href="contact.html">Contact Me</a>
            </innerFrameText>
        </sideFrame>
    </body>
`;

document.body.appendChild(template.content);