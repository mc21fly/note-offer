import uuid from "../utils/uuid.js";

export default function parseProfiles() {
    return new Promise(async (res, rej) => {
        try {
            const response = await fetch("/offers/kontakty");
            const { data } = await response.json();

            const dom = new DOMParser().parseFromString(data, "text/html");
            const contacts = dom.getElementsByClassName("employee-box");

            res(
                Array.from(contacts)
                    .map((contact) => {
                        const header = contact.getElementsByTagName("mark")[0].getElementsByTagName("b")[0].innerHTML;
                        const [contactTitle, contactName] = header.split("<em>");

                        const contactJSON = {};

                        if (contactName) {
                            const phone = contact.getElementsByTagName("mark")[0].getElementsByTagName("a")[0].innerText;
                            const email = contact.getElementsByTagName("mark")[0].getElementsByTagName("a")[1].innerText;

                            contactJSON.id = uuid();
                            contactJSON.title = contactTitle.trim();
                            contactJSON.name = contactName.slice(0, -5).trim();
                            contactJSON.phone = phone;
                            contactJSON.email = email;

                            return contactJSON;
                        }

                        return {};
                    })
                    .filter((contact) => Object.keys(contact).length !== 0)
            );
        } catch (e) {
            rej(new Error("Błąd importu kontaktów"));
        }
    });
}
