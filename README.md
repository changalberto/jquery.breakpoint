jquery.breakpoint
=================

Custom jQuery element breakpoint event.

Dependency
----------
[window.breakpoint.js](https://github.com/changalberto/window.breakpoint.js)

Usage
-----
```javascript
$('.element').on('breakpoint', function(e){
  switch(e.breakpoint){
    case 'sm':
      // Breakpoint Logics
    break;
    case 'md':
      // Breakpoint Logics
    break;
    case 'lg':
      // Breakpoint Logics
    break;
  }
});
```
