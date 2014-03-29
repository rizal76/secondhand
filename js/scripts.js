function showKategori(id){
	var katName = ".kategori"+id;
	var kat = $(katName).css( "display" );
	if ( kat == "none"){
		$(katName).css( "display", "block" );
	} else {
		$(katName).css( "display", "none" );
	}
	 
}