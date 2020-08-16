"""
    nav.py
"""
import yaml


def main():

    with open('./src/nav.yml', 'r') as file:
        nav = yaml.safe_load(file)

    nav_json = []

    for section in nav:

        if isinstance(section, str):
            nav_json.append(section)
            continue

        current = {}

        current['section'] = list(section.keys())[0]
        current['items'] = []

        for item in section[current['section']]:

            if isinstance(item, str):
                current['items'].append({'title': item, 'link': item})

            elif isinstance(item, dict):
                title = list(item.keys())[0]
                link = item[title]
                current['items'].append({'title': title, 'link': link})

        nav_json.append(current)

    line = f"- var navItems = {str(nav_json)}"

    # print(line)

    with open('./src/templates/nav_list.pug', 'w') as file:
        file.write(line)
        file.write('\n\nmixin fakemixin()\n    p')


if __name__ == "__main__":
    main()
