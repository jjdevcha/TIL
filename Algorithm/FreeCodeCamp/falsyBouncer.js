// Free Code Camp
// Basic Algorithm Scripting
// Falsy Bouncer

function bouncer(arr) {
    // Don't show a false ID to this bouncer.
    const falseEl = [false, '', null, 0, undefined, NaN];
    
    return arr.filter(cur => !falseEl.includes(cur));
  }