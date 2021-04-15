function countElements(head) {
    if(!head) return 0
    
    let count = 0
    // count the current node
    count += 1

    // check if there's a next, if there is keep counting
    if(head.next){
        const recur = countElements(head.next)
        count += recur
    }
    
    return count
}
