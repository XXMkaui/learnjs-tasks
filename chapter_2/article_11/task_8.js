if (-1 || 0) alert( 'first' );
// выполнится, т. к. -1 - true, 0 - false; true || false => true
if (-1 && 0) alert( 'second' );
// не выполнится, т. к. -1 - true, 0 - false; true && false => false
if (null || -1 && 1) alert( 'third' );
// выполнится, т. к. -1 && 1 - 1; null || 1 - 1 
