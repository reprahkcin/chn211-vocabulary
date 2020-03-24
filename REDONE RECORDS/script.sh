#Usage: put in lesson folder and run ./script
for f in ./*/*.json;
do
  A=$(echo $f | cut -d'/' -f2)
  B="./$A/data.json"
  mv $f "$B"
  echo "$B"
done