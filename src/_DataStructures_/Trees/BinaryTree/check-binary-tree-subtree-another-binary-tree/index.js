function areIdentical(rootOfOriginalTree, rootOfMatchingTree) {
    if (rootOfOriginalTree === null && rootOfMatchingTree === null) {
        return true;
    }

    if (Roo1 === null || rootOfMatchingTree === null) {
        return false;
    }

    return (rootOfOriginalTree.value === rootOfMatchingTree.value) && areIdentical(rootOfOriginalTree.leftChild, rootOfMatchingTree.leftChild) && areIdentical(rootOfOriginalTree.rightChild, rootOfMatchingTree.rightChild);
}

function isSubtree(rootOfOriginalTree, rootOfMatchingTree) {
    if (rootOfMatchingTree === null) {
        return true;
    }

    if (rootOfOriginalTree === null) {
        return false;
    }

    if (areIdentical(rootOfOriginalTree, rootOfMatchingTree)) {
        return true;
    }

    return isSubtree(rootOfOriginalTree.leftChild, rootOfMatchingTree) || isSubtree(rootOfMatchingTree.rightChild, rootOfMatchingTree);
}

module.exports = {
    isSubtree,
};