import os
import argparse

def is_important_file(filepath):
    """
    Determine if a file is "important":
    - Must be a code file (from a wide range of recognized code extensions).
    - Must contain actual code constructs like 'function', 'class', 'def', or 'import'.
    - Exclude files larger than 200KB.
    - Exclude vendor and irrelevant directories.
    - Exclude minified files (like .min.js).

    This approach now includes a broad range of code file extensions.
    """
    ignore_dirs = ['node_modules', '.git', 'vendor', 'venv', '__pycache__', '.next']
    parts = filepath.split(os.sep)
    if any(ig in parts for ig in ignore_dirs):
        return False

    _, ext = os.path.splitext(filepath)
    # Expanded list of code extensions to cover common languages and frameworks
    code_extensions = [
        '.js', '.mjs', '.cjs', '.jsx', '.ts', '.tsx',
        '.py', '.java', '.rb', '.go', '.php', '.c', '.cpp', '.cs', 
        '.vue', '.rs', '.swift', '.scala', '.kt', '.kts', '.ex', '.exs',
        '.sh', '.ps1', '.erl', '.lua'
    ]

    if ext.lower() not in code_extensions:
        return False

    # Ignore minified JS files (common pattern)
    if ext.lower() == '.js' and 'min' in os.path.basename(filepath).lower():
        return False

    # Exclude large files
    if os.path.getsize(filepath) > 200000:  # 200KB
        return False

    try:
        with open(filepath, 'r', encoding='utf-8', errors='replace') as f:
            content = f.read()
    except Exception:
        return False

    if not content.strip():
        return False

    # Check for code constructs.
    # We look for a few key indicators that the file contains code logic:
    # 'function', 'class', 'def', 'import' are common indicators.
    code_keywords = ['function ', 'class ', 'def ', 'import ']
    # Check for presence of any code keyword
    if any(kw in content for kw in code_keywords):
        return True

    return False

def gather_important_files(root_dir):
    """
    Walk through the directory and gather a list of all important files.
    """
    important_files = []
    for dirpath, dirnames, filenames in os.walk(root_dir):
        for filename in filenames:
            filepath = os.path.join(dirpath, filename)
            rel_path = os.path.relpath(filepath, root_dir)
            if is_important_file(filepath):
                important_files.append(rel_path)
    return important_files

def build_filtered_structure(root_dir, important_files):
    """
    Build a hierarchical directory structure including only directories and important files.
    """
    structure_lines = []

    def recurse_dir(dir_path, depth=0):
        rel_path = os.path.relpath(dir_path, root_dir)
        if rel_path == '.':
            rel_path = ''
        # Filter important files that belong to this directory or its subdirectories
        relevant_files = [f for f in important_files if f.startswith(rel_path) or rel_path == '']

        if not relevant_files:
            return

        indent = '    ' * depth
        dir_name = os.path.basename(dir_path) if rel_path != '' else os.path.basename(root_dir) + " (root)"
        structure_lines.append(f"{indent}{dir_name}/" if rel_path else f"{dir_name}")

        # Files directly in this directory
        files_in_dir = [f for f in relevant_files if os.path.dirname(f) == rel_path]
        for f in files_in_dir:
            file_name = os.path.basename(f)
            structure_lines.append('    ' * (depth + 1) + file_name)

        # Recurse into subdirectories
        for entry in sorted(os.listdir(dir_path)):
            full_entry_path = os.path.join(dir_path, entry)
            if os.path.isdir(full_entry_path):
                recurse_dir(full_entry_path, depth + 1)

    recurse_dir(root_dir)
    return structure_lines

def main():
    parser = argparse.ArgumentParser(description="Generate filtered directory structure and important files with code.")
    parser.add_argument('root', help='Root directory of the codebase')
    parser.add_argument('-o', '--output', default='structure_and_files.txt', help='Output text file')
    args = parser.parse_args()

    root_dir = os.path.abspath(args.root)
    important_files = gather_important_files(root_dir)
    structure_lines = build_filtered_structure(root_dir, important_files)

    with open(args.output, 'w', encoding='utf-8') as f:
        f.write("DIRECTORY STRUCTURE (Important Files Only):\n")
        f.write("\n".join(structure_lines))
        f.write("\n\nIMPORTANT FILES & THEIR CONTENT:\n\n")

        for imp_file in important_files:
            full_path = os.path.join(root_dir, imp_file)
            f.write(f"--- {imp_file} ---\n")
            try:
                with open(full_path, 'r', encoding='utf-8', errors='replace') as file_content:
                    f.write(file_content.read())
            except Exception:
                f.write("[Could not read file content]\n")
            f.write("\n\n")

    print(f"Done! Output written to {args.output}")

if __name__ == "__main__":
    main()
