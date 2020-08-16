import igem_wikisync as sync

sync.run(
    team='{{ cookiecutter.team_name }}',
    src_dir='dist',
    build_dir='igem'
)