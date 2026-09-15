/* =========================================================
   RRNOVA TECH ASSISTANT
========================================================= */

const chatbotButton =
    document.getElementById("chatbotButton");

const chatbotWindow =
    document.getElementById("chatbotWindow");

const chatbotClose =
    document.getElementById("chatbotClose");

const chatbotMessages =
    document.getElementById("chatbotMessages");

const chatbotForm =
    document.getElementById("chatbotForm");

const chatbotInput =
    document.getElementById("chatbotInput");


/* ================= OPEN / CLOSE ================= */

if (chatbotButton) {

    chatbotButton.addEventListener("click", () => {

        chatbotWindow.classList.toggle("open");

    });

}


if (chatbotClose) {

    chatbotClose.addEventListener("click", () => {

        chatbotWindow.classList.remove("open");

    });

}


/* ================= ADD MESSAGE ================= */

function addMessage(message, type) {

    const div =
        document.createElement("div");

    div.className =
        type === "user"
            ? "user-message"
            : "bot-message";

    div.textContent =
        message;

    chatbotMessages.appendChild(div);

    chatbotMessages.scrollTop =
        chatbotMessages.scrollHeight;
}


/* ================= BOT RESPONSE ================= */

function getResponse(message) {

    const text =
        message.toLowerCase();


    if (
        text.includes("service") ||
        text.includes("what do you do")
    ) {

        return `
We provide AI & LLM solutions, MLOps & cloud,
web development and business automation.

You can view all our services on the Services page.
        `.trim();

    }


    if (
        text.includes("ai") ||
        text.includes("llm") ||
        text.includes("rag")
    ) {

        return `
We build AI-powered applications including
LLM applications, RAG systems, intelligent
automation and AI integrations.
        `.trim();

    }


    if (
        text.includes("mlops") ||
        text.includes("machine learning") ||
        text.includes("cloud")
    ) {

        return `
We help build reliable ML infrastructure,
deployment pipelines, monitoring and scalable
cloud-based machine learning systems.
        `.trim();

    }


    if (
        text.includes("web") ||
        text.includes("website") ||
        text.includes("application")
    ) {

        return `
We build modern websites and web applications
focused on performance, usability and business goals.
        `.trim();

    }


    if (
        text.includes("automation") ||
        text.includes("automate")
    ) {

        return `
We can automate repetitive workflows,
connect systems and reduce manual business work.
        `.trim();

    }


    if (
        text.includes("price") ||
        text.includes("pricing") ||
        text.includes("cost")
    ) {

        return `
Project pricing depends on the scope and technical
requirements. Contact us with your requirements and
we can discuss the best approach.
        `.trim();

    }


    if (
        text.includes("contact") ||
        text.includes("email") ||
        text.includes("phone")
    ) {

        return `
You can contact RRNOVA TECH at:

Email:
rrnova.tech@gmail.com

Phone:
+91 93442 85549

WhatsApp:
+91 93442 85549
        `.trim();

    }


    if (
        text.includes("location") ||
        text.includes("where")
    ) {

        return `
RRNOVA TECH is based in Chennai,
Tamil Nadu, India.
        `.trim();

    }


    if (
        text.includes("hello") ||
        text.includes("hi") ||
        text.includes("hey")
    ) {

        return `
Hello! 👋

Welcome to RRNOVA TECH.

I can tell you about our services,
AI solutions, web development,
MLOps or contact information.
        `.trim();

    }


    return `
Thanks for your message!

For a detailed discussion, contact us directly:

rrnova.tech@gmail.com

+91 93442 85549

You can also use our Contact page to send
your project requirements.
    `.trim();

}


/* ================= FORM ================= */

if (chatbotForm) {

    chatbotForm.addEventListener(
        "submit",
        function(event) {

            event.preventDefault();

            const message =
                chatbotInput.value.trim();

            if (!message) return;

            addMessage(
                message,
                "user"
            );

            chatbotInput.value = "";


            setTimeout(() => {

                addMessage(
                    getResponse(message),
                    "bot"
                );

            }, 450);

        }
    );

}


/* ================= QUICK QUESTIONS ================= */

document
    .querySelectorAll("[data-question]")
    .forEach(button => {

        button.addEventListener(
            "click",
            () => {

                const question =
                    button.dataset.question;

                addMessage(
                    question,
                    "user"
                );

                setTimeout(() => {

                    addMessage(
                        getResponse(question),
                        "bot"
                    );

                }, 400);

            }
        );

    });