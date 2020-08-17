import igem_wikisync as sync

sync.run(
    team='{{ cookiecutter.iGEM_team_code }}',
    src_dir='dist',
    build_dir='igem'
)