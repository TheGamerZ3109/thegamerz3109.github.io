const template = document.createElement('template');

template.innerHTML = `
    <body>
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
                <br>
                <br>
                <br>
                <br>
                <a href="404.html">404 page</a>
            </innerFrameText>
        </sideFrame>
    </body>
`;

document.body.appendChild(template.content);