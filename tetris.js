//Tetris variables
var Board;

var BOARD_LINE_WIDTH = 6;
var BLOCK_SIZE = 16;
var BOARD_POSITION = 160;
var BOARD_WIDTH = 10;
var BOARD_HEIGHT = 20;
var MIN_VERTICAL_MARGIN = 20;
var MIN_HORIZONTAL_MARGIN = 20;
var PIECE_BLOCKS = 5;
var tPieces, tPiecesInitPosition, Pieces;

//Tetris pieces data
tPieces = [
    // Square
      [
       [
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 2, 1, 0],
        [0, 0, 1, 1, 0],
        [0, 0, 0, 0, 0]
        ],
       [
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 2, 1, 0],
        [0, 0, 1, 1, 0],
        [0, 0, 0, 0, 0]
        ],
       [
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 2, 1, 0],
        [0, 0, 1, 1, 0],
        [0, 0, 0, 0, 0]
        ],
       [
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 2, 1, 0],
        [0, 0, 1, 1, 0],
        [0, 0, 0, 0, 0]
        ]
      ],
    // I
      [
       [
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 1, 2, 1, 1],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0]
        ],
       [
        [0, 0, 0, 0, 0],
        [0, 0, 1, 0, 0],
        [0, 0, 2, 0, 0],
        [0, 0, 1, 0, 0],
        [0, 0, 1, 0, 0]
        ],
       [
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [1, 1, 2, 1, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0]
        ],
       [
        [0, 0, 1, 0, 0],
        [0, 0, 1, 0, 0],
        [0, 0, 2, 0, 0],
        [0, 0, 1, 0, 0],
        [0, 0, 0, 0, 0]
        ]
       ],
    // L
      [
       [
        [0, 0, 0, 0, 0],
        [0, 0, 1, 0, 0],
        [0, 0, 2, 0, 0],
        [0, 0, 1, 1, 0],
        [0, 0, 0, 0, 0]
        ],
       [
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 1, 2, 1, 0],
        [0, 1, 0, 0, 0],
        [0, 0, 0, 0, 0]
        ],
       [
        [0, 0, 0, 0, 0],
        [0, 1, 1, 0, 0],
        [0, 0, 2, 0, 0],
        [0, 0, 1, 0, 0],
        [0, 0, 0, 0, 0]
        ],
       [
        [0, 0, 0, 0, 0],
        [0, 0, 0, 1, 0],
        [0, 1, 2, 1, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0]
        ]
       ],
    // L mirrored
      [
       [
        [0, 0, 0, 0, 0],
        [0, 0, 1, 0, 0],
        [0, 0, 2, 0, 0],
        [0, 1, 1, 0, 0],
        [0, 0, 0, 0, 0]
        ],
       [
        [0, 0, 0, 0, 0],
        [0, 1, 0, 0, 0],
        [0, 1, 2, 1, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0]
        ],
       [
        [0, 0, 0, 0, 0],
        [0, 0, 1, 1, 0],
        [0, 0, 2, 0, 0],
        [0, 0, 1, 0, 0],
        [0, 0, 0, 0, 0]
        ],
       [
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 1, 2, 1, 0],
        [0, 0, 0, 1, 0],
        [0, 0, 0, 0, 0]
        ]
       ],
    // N
      [
       [
        [0, 0, 0, 0, 0],
        [0, 0, 0, 1, 0],
        [0, 0, 2, 1, 0],
        [0, 0, 1, 0, 0],
        [0, 0, 0, 0, 0]
        ],
       [
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 1, 2, 0, 0],
        [0, 0, 1, 1, 0],
        [0, 0, 0, 0, 0]
        ],
       [
        [0, 0, 0, 0, 0],
        [0, 0, 1, 0, 0],
        [0, 1, 2, 0, 0],
        [0, 1, 0, 0, 0],
        [0, 0, 0, 0, 0]
        ],



       [
        [0, 0, 0, 0, 0],
        [0, 1, 1, 0, 0],
        [0, 0, 2, 1, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0]
        ]
       ],
    // N mirrored
      [
       [
        [0, 0, 0, 0, 0],
        [0, 0, 1, 0, 0],
        [0, 0, 2, 1, 0],
        [0, 0, 0, 1, 0],
        [0, 0, 0, 0, 0]
        ],
       [
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 2, 1, 0],
        [0, 1, 1, 0, 0],
        [0, 0, 0, 0, 0]
        ],
       [
        [0, 0, 0, 0, 0],
        [0, 1, 0, 0, 0],
        [0, 1, 2, 0, 0],
        [0, 0, 1, 0, 0],
        [0, 0, 0, 0, 0]
        ],
       [
        [0, 0, 0, 0, 0],
        [0, 0, 1, 1, 0],
        [0, 1, 2, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0]
        ]
       ],
    // T
      [
       [
        [0, 0, 0, 0, 0],
        [0, 0, 1, 0, 0],
        [0, 0, 2, 1, 0],
        [0, 0, 1, 0, 0],
        [0, 0, 0, 0, 0]
        ],
       [
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 1, 2, 1, 0],
        [0, 0, 1, 0, 0],
        [0, 0, 0, 0, 0]
        ],
       [
        [0, 0, 0, 0, 0],
        [0, 0, 1, 0, 0],
        [0, 1, 2, 0, 0],
        [0, 0, 1, 0, 0],
        [0, 0, 0, 0, 0]
        ],
       [
        [0, 0, 0, 0, 0],
        [0, 0, 1, 0, 0],
        [0, 1, 2, 1, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0]
        ]
       ]
    ];

    tPiecesInitPosition = [
    /* Square */
      [
        [-2, -3],
        [-2, -3],
        [-2, -3],
        [-2, -3]
       ],
    /* I */
      [
        [-2, -2],
        [-2, -3],
        [-2, -2],
        [-2, -3]
       ],
    /* L */
      [
        [-2, -3],
        [-2, -3],
        [-2, -3],
        [-2, -2]
       ],
    /* L mirrored */
      [
        [-2, -3],
        [-2, -2],
        [-2, -3],
        [-2, -3]
       ],
    /* N */
      [
        [-2, -3],
        [-2, -3],
        [-2, -3],
        [-2, -2]
       ],
    /* N mirrored */
      [
        [-2, -3],
        [-2, -3],
        [-2, -3],
        [-2, -2]
       ],
    /* T */
      [
        [-2, -3],
        [-2, -3],
        [-2, -3],
        [-2, -2]
       ],
];

Pieces = Object.create(null);
Pieces.prototype = {
	GetBlockType:function(pPiece,pRotation,pX,pY){
		return tPieces[pPiece][pRotation][pX][pY];
	},
	GetXInitialPosition: function(pPiece,pRotation){
		return tPiecesInitPosition[pPiece][pRotation][0];
	},
	GetYInitialPosition: function(pPiece,pRotation){
		return tPiecesInitPosition[pPiece][pRotation][1];
	}
};

Pieces = Object.create(Pieces.prototype);



var b = new Array(new Array(new Array()));

function Array2D(x, y)
{
    var array2D = new Array(x);

    for(var i = 0; i < array2D.length; i++)
    {
        array2D[i] = new Array(y);
    }

    return array2D;
}
var b = Array2D(BOARD_WIDTH, BOARD_HEIGHT);

for(var i=0;i<BOARD_WIDTH;++i)
	for(var ii=0;ii<BOARD_HEIGHT;++ii)
		b[i][ii] = 0;








Board = Object.create(null);
Board.prototype = {
	enum:Object.freeze({POS_FREE: 0, POS_FILLED: 1}),
	tBoard:b,
	tPieces:Pieces,
	tScreenHeight:null,

	InitBoard:function(){
		for (var i = 0; i < BOARD_WIDTH; i++)
			for (var j = 0; j < BOARD_HEIGHT; j++)
				this.tBoard[i][j] = this.enum.POS_FREE;
	},
	DeleteLine:function(pY){
		// Moves all the upper lines one row down
		for (var j = pY; j > 0; j--)
		{
			for (var i = 0; i < BOARD_WIDTH; i++)
			{
				this.tBoard[i][j] = this.tBoard[i][j-1];
			}
		}
	},
	GetXPosInPixels    :function(pPos){
    	return  ( ( BOARD_POSITION - (BLOCK_SIZE * (BOARD_WIDTH / 2)) ) + (pPos * BLOCK_SIZE) );
	},
	GetYPosInPixels    :function(pPos){
    	return ( (this.mScreenHeight - (BLOCK_SIZE * BOARD_HEIGHT)) + (pPos * BLOCK_SIZE) );
	},
	IsFreeBlock        :function(pX,pY){
    	if (this.tBoard[Math.floor(pX)][pY] == this.enum.POS_FREE) return true; else return false;
	},
	IsPossibleMovement :function(pX,pY,pPiece,pRotation){
	    // Checks collision with pieces already stored in the board or the board limits
		// This is just to check the 5x5 blocks of a piece with the appropriate area in the board
		for (var i1 = pX, i2 = 0; i1 < pX + PIECE_BLOCKS; i1++, i2++)
		{
			for (var j1 = pY, j2 = 0; j1 < pY + PIECE_BLOCKS; j1++, j2++)
			{
				// Check if the piece is outside the limits of the board
				if (    i1 < 0           ||
					i1 > BOARD_WIDTH  - 1    ||
					j1 > BOARD_HEIGHT - 1)
				{
					if (this.tPieces.GetBlockType (pPiece, pRotation, j2, i2) != 0)
						return 0;
				}

				// Check if the piece have collisioned with a block already stored in the map
				if (j1 >= 0)
				{
					if ((this.tPieces.GetBlockType (pPiece, pRotation, j2, i2) != 0) &&
						(!this.IsFreeBlock (i1, j1)) )
						return false;
				}
			}
		}
		// No collision
		return true;
	},
	StorePiece         :function(pX,pY,pPiece,pRotation){
		for (var i1 = pX, i2 = 0; i1 < pX + PIECE_BLOCKS; i1++, i2++)
		{
			for (var j1 = pY, j2 = 0; j1 < pY + PIECE_BLOCKS; j1++, j2++)
			{
				// Store only the blocks of the piece that are not holes
				if (this.tPieces.GetBlockType (pPiece, pRotation, j2, i2) != 0)
					this.tBoard[Math.floor(i1)][j1] = this.enum.POS_FILLED;
			}
		}
	},
	DeletePossibleLines:function(){
		for (var j = 0; j < BOARD_HEIGHT; j++)
		{
			var i = 0;
			while (i < BOARD_WIDTH)
			{
				if (this.tBoard[i][j] != this.enum.POS_FILLED) break;
				i++;
			}

			if (i == BOARD_WIDTH) this.DeleteLine (j),Game.score+=10;
		}
	},
	IsGameOver         :function(){
		//If the first line has blocks, then, game over
		for (var i = 0; i < BOARD_WIDTH; i++)
		{
			if (this.tBoard[i][0] == this.enum.POS_FILLED) return true;
		}

		return false;
	}
};
Board = Object.create(Board.prototype);
/////Game.h
var Game;
Game = Object.create(null);
Game.prototype = {
	Game:function(pBoard,pPieces,pIO,pScreenHeight){

	},
	DrawScene:function(){

		this.DrawBoard();
		this.DrawPiece(this.mPosX, this.mPosY, this.mPiece, this.mRotation);
		this.DrawPiece(this.mNextPosX, this.mNextPosY, this.mNextPiece, this.mNextRotation);
	},
	CreateNewPiece:function(){
		    // The new piece
		this.mPiece          = this.mNextPiece;
		this.mRotation       = this.mNextRotation;
		this.mPosX           = (BOARD_WIDTH / 2) + Pieces.GetXInitialPosition (this.mPiece, this.mRotation);
		this.mPosY           = Pieces.GetYInitialPosition (this.mPiece, this.mRotation);
		// Random next piece
		this.mNextPiece      = this.GetRand (0, 6);
		this.mNextRotation   = this.GetRand (0, 3);
		this.drawstar = true;
	},
	mPosX:0,
	mPosY:0,
	mPiece:0,
	mRotation:0,
	mScreenHeight:0,
	mNextPosX:0,
	mNextPosY:0,
	mNextPiece:0,
	mNextRotation:0,
	Board:null,
	Pieces:null,
	drawstar:true,
	IO: App.client.visuals,
	GetRand:function(pA,pB){


		return Math.round(pA+Math.random()*pB);
	},
	InitGame:function(p,b,h){
		// First piece
		this.Board = b;
		b.InitBoard();
		this.Pieces = p;
		this.mScreenHeight = h;
		this.mPiece          = this.GetRand (0, 6);
		this.mRotation       = this.GetRand (0, 3);
		this.mPosX           = (BOARD_WIDTH / 2) + this.Pieces.GetXInitialPosition (this.mPiece, this.mRotation);
		this.mPosY           = this.Pieces.GetYInitialPosition (this.mPiece, this.mRotation);
		//  Next piece
		this.mNextPiece      = this.GetRand (0, 6);
		this.mNextRotation   = this.GetRand (0, 3);
		this.mNextPosX       = BOARD_WIDTH + 1;
		this.mNextPosY       = 5;
		this.blockSheet = App.client.graphics.load("blocks_2");
		this.clear = App.client.graphics.load("clear");
		this.tX = 120;
		this.count = 0;
	},
	DrawPiece:function(pX,pY,pPiece,pRotation){
		var mColor;               // Color of the block

		// Obtain the position in pixel in the screen of the block we want to draw
		var mPixelsX = this.Board.GetXPosInPixels(pX);
		var mPixelsY = this.Board.GetYPosInPixels(pY);

		var ttX = mPixelsX;

		if (this.tX<ttX)
			this.tX++;
		else
			this.tX--;
		var rt = 0;
		// Travel the matrix of blocks of the piece and draw the blocks that are filled
		for (var i = 0; i < PIECE_BLOCKS; i++)
		{
			for (var j = 0; j < PIECE_BLOCKS; j++)
			{
				var s =0;
				var type;
				// Get the type of the block and draw it with the correct color
				switch (this.Pieces.GetBlockType (pPiece, pRotation, j, i))
				{
					case 1: mColor = "#00FFFF", s = 2; break;  // For each block of the piece except the pivot
					case 2: mColor = "#0000FF", s = 2; break;   // For the pivot
				}

				if (this.Pieces.GetBlockType (pPiece, pRotation, j, i) != 0)
				{
					if (!this.drawstar)
					this.DrawSquare((ttX + i * BLOCK_SIZE),
										mPixelsY + j * BLOCK_SIZE,s);
					else
					this.DrawSquareScale(ttX + i * BLOCK_SIZE,
										mPixelsY + j * BLOCK_SIZE,s,0.5*this.star/8);
					if (this.drawstar)
						this.DrawStar(ttX + i * BLOCK_SIZE,
										mPixelsY + j * BLOCK_SIZE,Math.round(8-this.star)) ;

				}
			}
		}

		if (this.star>8)
			this.star = 0,this.drawstar=false;
		if (this.drawstar)
		this.star+=0.1*1*App.client.delta;

	},
	LeftPoint:0,
	HighPoint:0,
	HighPoint2:0,
	score:0,
	Score:function(){
		var text = "Score: " +this.score;

		return text;
	},
	DrawSquare:function(x,y,i){
		var is = i;
		this.IO.image_part(this.blockSheet,x,y,0.5,0.75,1,32*is,0,33 - 1,33 - 1);
	},
	DrawSquareScale:function(x,y,i,s){
		var is = i;
		this.IO.image_part(this.blockSheet,x,y,s,0.75,1,32*is,0,33 - 1,33 - 1);
	},
	DrawStar:function(x,y,i){
		var is = i;
		this.IO.image_part(this.clear,x,y,0.5+Math.random()*1.55,0.75+Math.random()*-0.75,1,32*is,0,33 - 1,33 - 1);
	},
	DrawFadeSquare:function(x,y,i,r){
		var is = i;
		var ir = r;
		this.IO.image_part(this.blockSheet,x,y,0.5,0.25,1,32*is,32*ir,33 - 1,33 - 1);
	},
	star:0,
	DrawBoard:function(){
		this.IO = App.client.visuals;
		// Calculate the limits of the board in pixels
		var mX1 = BOARD_POSITION - (BLOCK_SIZE * (BOARD_WIDTH / 2)) - 1;
		var mX2 = BOARD_POSITION + (BLOCK_SIZE * (BOARD_WIDTH / 2));
		var mY = this.mScreenHeight - (BLOCK_SIZE * BOARD_HEIGHT);

		// Check that the horizontal margin is not to small
		//assert (mX1 > MIN_HORIZONTAL_MARGIN);

		// Drawing the blocks that are already stored in the board
		mX1 += 1;
		for (var i = 0; i < BOARD_WIDTH; i++)
		{
			for (var j = 0; j < BOARD_HEIGHT; j++)
			{
                
				// Check if the block is filled, if so, draw it
				if (!this.Board.IsFreeBlock(i, j))
				{
					this.DrawSquare(mX1 + i * BLOCK_SIZE,
											mY + j * BLOCK_SIZE,2);
				}
				else
				{
					this.DrawFadeSquare(mX1 + i * BLOCK_SIZE,
											mY + j * BLOCK_SIZE,2,1);

					this.DrawFadeSquare(mX1 + i * BLOCK_SIZE,
											mY + j * BLOCK_SIZE,2,0);
				}
			}
		}
		this.IO.text("Tetris with Spice.js",0,this.mScreenHeight-BOARD_HEIGHT*20);
		this.IO.text(Math.round(App.client.fps*10)/10+" fps",0,this.mScreenHeight-BOARD_HEIGHT*19);
		this.IO.text(this.Score(),0,this.mScreenHeight-BOARD_HEIGHT*17);


	}
};
Game = Object.create(Game.prototype);
