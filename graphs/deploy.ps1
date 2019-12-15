Remove-Item .\dist\*
yarn build
Remove-Item ..\server\content\graphs\*
Copy-Item .\dist\* ..\server\content\graphs
