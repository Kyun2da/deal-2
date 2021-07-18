const getNodeIndex = (target) => {
  return Array.from(target.parentNode.children).indexOf(target);
};

export default getNodeIndex;
