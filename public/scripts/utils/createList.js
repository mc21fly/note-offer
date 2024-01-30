export default function createList(title, items, handleReload) {
    const list = document.createElement("div");
    list.classList.add("list");
    list.classList.add("show");

    const list_head = document.createElement("div");
    list_head.classList.add("list-head");
    list_head.addEventListener("click", () => {
        list.classList.toggle("show");
    });

    const list_title = document.createElement("div");
    list_title.classList.add("list-title");
    list_title.innerText = title;

    list_head.appendChild(list_title);

    const list_items = document.createElement("ul");
    list_items.classList.add("list-items");

    list.appendChild(list_head);
    list.appendChild(list_items);

    if (items?.length > 0) {
        items.forEach((item) => {
            switch (item.type) {
                case "input":
                    const input_list_item = createInputListItem(item, list_items);
                    list_items.appendChild(input_list_item);
                    break;
                case "single-select":
                    const single_select_list_item = createSingleSelectListItem(item, list_items);
                    list_items.appendChild(single_select_list_item);
                    break;
                case "checkbox":
                    const checkbox_list_item = createCheckBoxListItem(item, list_items);
                    list_items.appendChild(checkbox_list_item);
                    break;
                default:
                    const default_list_item = createDefaultListItem(item, list_items);
                    list_items.appendChild(default_list_item);
                    break;
            }
        });
    } else {
        const list_item = document.createElement("li");
        list_item.classList.add("list-item");
        list_item.classList.add("refresh-icon");
        list_item.style.alignItems = "center";
        list_item.innerText = "Odśwież listę";

        list_item.addEventListener("click", () => {
            const list_item_index = list_items.childNodes.findIndex((item) => item === list_item);
            handleReload(list_item, list_item_index, list_items.childNodes);
        });

        list_items.appendChild(list_item);
        list_title.classList.add("error-icon-l");
    }

    return list;
}

function createDefaultListItem(item, list_items) {
    const list_item_index = list_items.childNodes.length;
    const list_item = document.createElement("li");

    list_item.classList.add("list-item");
    list_item.innerHTML = item.title;

    list_item.addEventListener("click", () => {
        item.onClick(list_item, list_item_index, list_items.childNodes);
    });

    return list_item;
}

function createInputListItem(item, list_items) {
    const list_item = document.createElement("li");
    const input = document.createElement("input");
    input.placeholder = item.title;
    list_item.appendChild(input);

    list_item.classList.add("list-item");
    list_item.classList.add("input");

    input.addEventListener("input", (e) => {
        item.value = e.target.value !== "" ? e.target.value : item.default_value;

        item.onChange();
    });

    return list_item;
}

function createSingleSelectListItem(item, list_items) {
    const list_item_index = list_items.childNodes.length;
    const list_item = document.createElement("li");

    list_item.classList.add("list-item");
    if (list_item_index === item.default_value) list_item.classList.add("selected");
    list_item.innerHTML = item.title;

    list_item.addEventListener("click", () => {
        const isSelected = list_item.classList.contains("selected");

        if (isSelected) {
            list_item.classList.remove("selected");
            item.onClick();
            return;
        }

        list_items.childNodes.forEach((li) => li.classList.remove("selected"));
        list_item.classList.add("selected");
        item.onClick(list_item, list_item_index, list_items.childNodes);
    });

    return list_item;
}

function createCheckBoxListItem(item, list_items) {
    const list_item_index = list_items.childNodes.length;
    const list_item = document.createElement("li");

    list_item.classList.add("list-item");
    list_item.innerHTML = item.title;
    list_item.setAttribute("data-checked", item.default_value);

    list_item.addEventListener("click", () => {
        item.value = !item.value;
        list_item.setAttribute("data-checked", item.value);

        item.onToggle(list_item, list_item_index, list_items.childNodes);
    });

    return list_item;
}
