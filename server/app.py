from flask import Flask, request, jsonify
from flask_mail import Mail, Message
from flask_cors import CORS
import os
from dotenv import load_dotenv

load_dotenv()
app = Flask(__name__)
CORS(app)

# Mail configuration
app.config["MAIL_SERVER"] = "smtp.gmail.com"
app.config["MAIL_PORT"] = 587
app.config["MAIL_USE_TLS"] = True
app.config["MAIL_USERNAME"] = os.environ.get("MAIL_USERNAME")
app.config["MAIL_PASSWORD"] = os.environ.get("MAIL_PASSWORD")
app.config["MAIL_DEFAULT_SENDER"] = os.environ.get("MAIL_DEFAULT_SENDER")
app.config["MAIL_ASCII_ATTACHMENTS"] = True

mail = Mail(app)

@app.route("/contact", methods=["POST"])
def contact():
    data = request.form

    # Extract data fields
    first_name = data.get("firstName")
    last_name = data.get("lastName")
    company = data.get("company")
    email = data.get("email")
    phone_number = data.get("phoneNumber")
    message = data.get("message")
    agreed = data.get("agreed")

    msg = Message(
        "Contact Form Submission",
        sender=os.getenv('MAIL_DEFAULT_SENDER'),
        recipients=[os.getenv('MAIL_DEFAULT_SENDER')],
    )
    msg.body = f"""
    First Name: {first_name}
    Last Name: {last_name}
    Company: {company}
    Email: {email}
    Phone Number: {phone_number}
    Message: {message}
    Agreed: {agreed}
    """

    # Handle attachments
    if 'attachment' in request.files:
        attachment = request.files['attachment']
        if attachment.filename:
            msg.attach(attachment.filename, attachment.content_type, attachment.read())

    try:
        mail.send(msg)
        return jsonify({"message": "Form submitted successfully"}), 200
    except Exception as e:
        return jsonify({"message": "Failed to send email", "error": str(e)}), 500

if __name__ == "__main__":
    app.run(debug=True)
