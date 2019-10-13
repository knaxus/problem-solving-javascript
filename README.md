# Problem Solving using Javascript

[![Open Source Love](https://badges.frapsoft.com/os/v2/open-source.svg?v=103)](https://github.com/vinitshahdeo/HacktoberFest)
[![Build Status](https://travis-ci.org/knaxus/problem-solving-javascript.svg?branch=master)](https://travis-ci.org/knaxus/problem-solving-javascript)
[![Coverage Status](https://coveralls.io/repos/github/knaxus/problem-solving-javascript/badge.svg?branch=master)](https://coveralls.io/github/knaxus/problem-solving-javascript?branch=master)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Collection of interview questions with Unit Tests. Problems includes Data Structures, Logical and few Classical problems.

![Hacktober Fest 2019](https://camo.githubusercontent.com/73b77ee452271049513e503ff3e8e8c172eaadab/68747470733a2f2f6861636b746f626572666573742e6469676974616c6f6365616e2e636f6d2f6173736574732f484631395f736f6369616c2d373434643937366632323765346166663638363634343361626365646538633635316233303965633963376339663734313066353934346638653132393962392e706e67)

## Table of Contents

### Data Structures

- [Singly Linked List](src/_DataStructures_/LinkedList)

  - [N Element From Last](src/_DataStructures_/LinkedList/element-from-last)
  - [Middle Node](src/_DataStructures_/LinkedList/middle-node)
  - [Detect Loop](src/_DataStructures_/LinkedList/loop-in-list)
  - [Reverse Linked List](src/_DataStructures_/LinkedList/reverse-linked-list)

- [Stack](src/_DataStructures_/Stack)

  - [Implement Queue Using Stack](src/_DataStructures_/Stack/immitate-queue-using-stack)
  - [Baseball Game](src/_DataStructures_/Stack/baseball-game)
  - [Find minimum in the Stack](src/_DataStructures_/Stack/min-stack)
  - [Balanced Parenthesis](src/_DataStructures_/Stack/balanced-parenthesis)
  - [Postfix Expression Evaluation](src/_DataStructures_/Stack/postfix-expression-evaluation)
  - [Remove Consecutive Repeated Digits](src/_DataStructures_/Stack/remove-consecutive-repeated-digits)
  - [Implement 2 Stacks using Single Array](src/_DataStructures_/Stack/2-stacks-using1-array)

* [Queue](src/_DataStructures_/Queue)

  - [Weave](src/_DataStructures_/Queue/weave)
  - [Reverse First K Elements of a Queue](src/_DataStructures_/Queue/reverse-first-k)
  - [Generate all Binary Numbers from 1 to N](src/_DataStructures_/Queue/generate-binary-number)

* [Doubly Linked List](src/_DataStructures_/DoublyLinkedList)

* [Trees](src/_DataStructures_/Trees)
  - [Binary Search Tree](src/_DataStructures_/Trees/BinarySearchTree)
    - [Find k<sup>th</sup> maximum in a BinarySearchTree](src/_DataStructures_/Trees/BinarySearchTree/find-kth-max)
    - [Find k<sup>th</sup> minimum in a BinarySearchTree](src/_DataStructures_/Trees/BinarySearchTree/find-kth-min)
    - [Find Ancestors of a Node](src/_DataStructures_/Trees/BinarySearchTree/find-ancestors)
    - [Find Height of BST](src/_DataStructures_/Trees/BinarySearchTree/height-of-bst)
    - [Find k Nodes from Root of BST](src/_DataStructures_/Trees/BinarySearchTree/find-k-nodes-from-root)
  - [Suffix Tree](src/_DataStructures_/SuffixTree)

### Logical Problems

- [Anagrams](src/_Problems_/anagrams)
- [Array Chunk](src/_Problems_/array-chunk)
- [Count Vowels](src/_Problems_/count-vowels)
- [Find 2 numbers that add upto N](src/_Problems_/find-2-nums-adding-to-n)
- [Find 2nd Maxinum from an Array](src/_Problems_/find-2nd-max)
- [FizzBuzz](src/_Problems_/fizzbuzz)
- [String Permutaions](src/_Problems_/get-string-permutations)
- [Get Subsequence](src/_Problems_/get_subsequence)
- [Get Maze Path](src/_Problems_/get-mazePath)
- [Get longest consecutive 1s](src/_Problems_/max-consecutive-1s)
- [Get Max Char](src/_Problems_/maxchar)
- [Get Smallest Common Number](src/_Problems_/get-smallest-common-number)
- [Merge 2 Sorted Arrays](src/_Problems_/merge-two-sorted-arrays)
- [Palindrome](src/_Problems_/palindrome)
- [Product of Elements](src/_Problems_/product-of-elements)
- [Remove Duplicates](src/_Problems_/remove-duplicates)
- [Reverse String](src/_Problems_/reverse_string)
- [Maximum Product of Three Numbers](src/_Problems_/max-product-of-3-numbers)
- [Next Greater for Every Element in an Array](src/_Problems_/next-greater-element)

### Searching

- [Binary Search](src/_Searching_/BinarySearch)

### Algorithms

- [LRU Cache](src/_Algorithms_/lru-cache)

### Path Finder

- [A\*](src/PathFinder/AStart)

### Classics

- [Caeser Cipher](src/_Classics_/caeser_cipher)
- [Fibonacci](src/_Classics_/fibonacci)

## CONTRIBUTION Guide

It's great to know that you want to contribute to this repo. Thanks for taking interest. Before you start, read the following carefully.

- When adding a new **problem** with solution

  - Take care of the filename convention (Very Important)
  - Problem statement should be there with examples
  - Make sure you add the Run Time complexity of your solution
  - Please take care of the segregation of the Problems as per the given Folder Structure
  - It's great if you can add the **Unit Tests** to verify your solutions as well
  - Strictly follow ESLINT rules

- When adding a Unit Test

  - Take care of the file name convention
  - Make sure CI (Travis) is passing

Keep an eye on this guide, it's subjected to change frequently.
