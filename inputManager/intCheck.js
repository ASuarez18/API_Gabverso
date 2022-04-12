

intCheck = (input) => {
    var accept = true;
    if(~input)
    {
        accept = false;
    }
    if(~typeof input == 'number')
    {
        accept = false;
    }
    return accept;
}