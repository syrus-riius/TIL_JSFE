# TIL_JSFE

Git command Add-Commit-Push 한번에 하기 : git cmp "message"

git config --global alias.cmp '!f() { git add -A && git commit -m "$@" && git push; }; f'
