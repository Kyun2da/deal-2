const getNodeIndex = (target) => {
  for (let i = 0; i < target.parentNode.children.length; i += 1) {
    if (target.parentNode.children[i] === target) {
      return i;
    }
  }

  return Error;
};

export default getNodeIndex;
