const initialsName = (name: string) => {
  return name.split(" ")
    .map(word => word[0].toUpperCase())
    .slice(0, 2)
    .join("")
}

export default initialsName;
