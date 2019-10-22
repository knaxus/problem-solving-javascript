// Check if a binary tree is subtree of another binary tree 
// Root of the source tree and the tree to be matched are provided in the parameters.
// Return true/false based on whether or not the given tree is the subtree of the source tree
// Time complexity : O(m*n) m is the number of nodes of the original tree, 
// n is the number of nodes in the tree to be matched

function areIdentical(rootOfOriginalTree, rootOfMatchingTree) {
    if (rootOfOriginalTree === null && rootOfMatchingTree === null) {
        return true;
    }

    if (rootOfOriginalTree === null || rootOfMatchingTree === null) {
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