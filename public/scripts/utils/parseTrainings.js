import uuid from "../utils/uuid.js";

export default function parseTrainings() {
    return new Promise(async (res, rej) => {
        try {
            const response = await fetch("/offers/szkolenia");
            const { data } = await response.json();

            const dom = new DOMParser().parseFromString(data, "text/html");
            const offer = dom.getElementById("our-offer").getElementsByTagName("div")[0];
            const trainings = offer.getElementsByClassName("expand-content");

            res(
                Array.from(trainings).map((training) => {
                    const trainingJSON = {};

                    const header = training.getElementsByTagName("h6")[0].firstChild;
                    const { title: trainingTitle, href: trainingHref } = header.attributes;
                    const contents = training.getElementsByClassName("our-offer-box");

                    trainingJSON.id = uuid();
                    trainingJSON.use = true;
                    trainingJSON.title = trainingTitle.value.toUpperCase().replaceAll("-", "&#8209;").replaceAll(" - ", " &#8209;&nbsp;");
                    trainingJSON.href = trainingHref.value.replace("https://centrumszkolen.notemaster.pl/", "");
                    trainingJSON.type = undefined;
                    trainingJSON.stages = Array.from(contents).map((content) => {
                        const stage = content.getElementsByTagName("a")[0];
                        const { title: stageTitle, href: stageHref } = stage.attributes;

                        const [stage_number, stage_title] = stageTitle.value.split(/ETAP\s{0,}\d{0,}\s{0,}./i);

                        switch (trainingJSON.type) {
                            case undefined:
                                trainingJSON.type = stage_title ? "two-col" : "one-col";
                                break;
                            case "one-col":
                                trainingJSON.type = stage_title ? "combined" : "one-col";
                                break;
                            case "two-col":
                                trainingJSON.type = stage_title ? "two-col" : "combined";
                                break;
                            case "combined":
                                trainingJSON.type = "combined";
                                break;
                            default:
                                trainingJSON.type = undefined;
                                break;
                        }

                        return {
                            id: uuid(),
                            use: true,
                            type: stage_title ? "two-col" : "one-col",
                            title: stage_title
                                ? stage_title.trim().replaceAll("-", "&#8209;").replaceAll(" - ", " &#8209;&nbsp;")
                                : stage_number.trim().replaceAll("-", "&#8209;").replaceAll(" - ", " &#8209;&nbsp;"),
                            href: stageHref.value.replace("https://centrumszkolen.notemaster.pl/", ""),
                        };
                    });

                    return trainingJSON;
                })
            );
        } catch (e) {
            rej([]);
        }
    });
}
