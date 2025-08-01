import os

EXCLUDE_DIRS = {'node_modules', '.git', '__pycache__'}

def generate_tree(start_path='.', prefix=''):
    entries = sorted(os.listdir(start_path))
    entries = [e for e in entries if e not in EXCLUDE_DIRS]

    for i, entry in enumerate(entries):
        path = os.path.join(start_path, entry)
        connector = "├── " if i < len(entries) - 1 else "└── "
        print(prefix + connector + entry)
        if os.path.isdir(path):
            extension = "│   " if i < len(entries) - 1 else "    "
            generate_tree(path, prefix + extension)

if __name__ == "__main__":
    with open("file_structure.txt", "w", encoding="utf-8") as f:
        from contextlib import redirect_stdout
        with redirect_stdout(f):
            generate_tree(".")
