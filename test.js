var Tests = [
    // Page references from HP-15C Owner's Handbook (November 1985)

    // p13
    ["9\r6-", 3],
    ["9\r6*", 54],
    ["9\r6/", 1.5],
    ["9\r6^", 531441],
    // p14
    ["300.51\r2*9.8/q", 7.8313, 0.0001],

    // Part I Fundamentals
    // p19
    ["123_\r", -123],
    ["1.2e3\r", 1200],
    // EEXCHS ["1.2e_3\r", 0.0012],
    // p20
    // EEXCHS ["6.6262e34_\r50*", 3.3131e-32, 0.0001],
    ["g\b", 0],
    ["12345", 12345],
    ["\b", 1234],
    ["9", 12349],
    ["q", 111.1261, 0.0001],
    ["\b", 0],
    // p22
    ["45g)", 1.6532, 0.0001],
    // p23
    ["9\r17+4-4/", 5.5],
    ["6\r7+9\r3-*", 78],
    // p24
    ["p", Math.PI],
    ["123.4567gS", 123],
    ["g\r_gS", -123],
    ["g\rfS", -0.4567, 1e-9],
    ["1.23456789_", -1.2346, 0.0001],
    ["gx", -1.2346],
    ["a", 1.2346],
    // p25
    ["25?", 0.04],
    ["8!", 40320],
    ["3.9q", 1.9748, 0.0001],
    ["12.3@", 151.29, 1e-9],
    // p26
    ["g730s", 0.5, 1e-9],
    ["gs", 30, 1e-9],
    ["60c", 0.5, 1e-9],
    ["gc", 60, 1e-9],
    ["45t", 1, 1e-9],
    ["gt", 45],
    // rad, grad
    // p27
    ["1.2345f2", 1.1404, 0.0001],
    ["g2", 1.2345, 1e-9],
    ["40.5f3", 0.7069, 0.0001],
    ["g3", 40.5],
    // p28
    ["45l", 3.8067, 0.0001],
    ["3.4012E", 30.0001, 0.0001],
    ["12.4578g)", 1.0954, 0.0001],
    ["3.1354)", 1365.8405, 1e-6],
    // hyp functions
    // p29
    ["2\r1.4^", 2.6390, 0.0001],
    ["2\r1.4_^", 0.3789, 0.0001],
    ["2_\r3^", -8],
    ["2\r3?^", 1.2599, 0.0001],
    // p30
    ["15.76\r3%+", 16.2328, 0.0001],
    ["15.76\r14.12g?", -10.4061, 0.0001],
    // p31
    ["g75\r10g1", [11.1803, 26.5651], 0.0001],
    ["30\r12f1", [10.3923, 6], 0.0001],
    // p35
    ["287\r12.9/g\r*13.9/", 20.6475, 0.0001],
    // p41
    ["1.15\r\r\r1000****", 1749.0063, 1e-7],
    // p43
    ["3S0", 3],
    ["g\b", 0],
    ["R0", 3],
    // p45
    ["8S04S+03S+024R-0", 9],
    ["R0", 15],
    ["4\r5.2-8.33*g\r7.46-0.32*/3.15\r2.75-4.3*1.71\r2.01*-/q", 4.5728, 0.0001],
    // p47
    ["5\r3f+", 60],
    // p48
    ["52\r4g+", 270725],
    // p49
    // RAN# [".5764Sf\r"],
    // p51
    ["fU4.63\r0;", 1],
    ["4.78\r20;6.61\r40;7.21\r60;7.78\r80;", 5],
    ["R3", 200],
    ["R4", 12000],
    ["R5", 31.01],
    ["R6", 200.49, 0.0001],
    ["R7", 1415],
    // p52
    ["4.78\r20g;", 4],
    ["5.78\r20;", 5],
    // p53
    ["g0", [40, 6.4], 0.001],
    // p54
    ["g.", [31.62, 1.24], 0.01],
    // p55
    ["f;", [4.86, 0.04], 0.04],
    // p57
    ["70f.", [7.56, 0.99], 0.01],
    // p58
    ["123456f74", "123456.0000"],
    ["f84", "1.2346e5"],
    // ENG ["f94", "123.46e3"],
    ["123.4567895f74", "123.4568"],
    ["f76", "123.456790"],
    ["f74", "123.4568"],
    ["f86", "1.234568e2"],
    ["f88", "1.23456790e2"],
    // p59
    [".012345f74", 0.012345],
    // ENG ["f91", "12e-3"],
    // ENG ["f93", "12.35e-3"],
    ["10*", .12345], // ENG ["10*", "123.5e-3"],
    ["f74", "0.1235"],
    // p60
    ["p", "3.1416"],
    ["f\b", "3141592653589793"],

    // Part II Programming
    // p67
    ["gP",  "000-"],
    ["fr",  "000-"],
    ["fTq", "001-42.21.11"],
    ["2",   "002- 2"],
    ["*",   "003-20"],
    ["9",   "004- 9"],
    [".",   "005-48"],
    ["8",   "006- 8"],
    ["/",   "007-10"],
    ["q",   "008-11"],
    ["gU",  "009-43.32"],
    ["gP"],
    ["300.51", 300.51],
    ["fq", 7.8313, 0.0001],
    // p71
    ["gP"],
    ["fr",  "000-"],
    ["fTq", "001-42.21.11"],
    ["S0",  "002-44. 0"],
    ["gq",  "003-43.11"],
    ["ge",  "004-43.26"],
    ["*",   "005-20"],
    ["S4",  "006-44. 4"],
    ["S+1", "007-44.40. 1"],
    ["P",   "008-31"],
    ["*",   "009-20"],
    ["fP",  "010-42.31"],
    ["S+2", "011-44.40. 2"],
    ["R0",  "012-45. 0"],
    ["/",   "013-10"],
    ["2",   "014- 2"],
    ["*",   "015-20"],
    ["R4",  "016-45. 4"],
    ["2",   "017- 2"],
    ["*",   "018-20"],
    ["+",   "019-40"],
    ["S+3", "020-44.40. 3"],
    ["gU",  "021-43.32"],
    ["gP"],
    ["fx"],
    ["2.5", 2.5],
    ["fq", 19.6350, 0.0001],
    ["8P", 164.9336, 0.0001],
    ["4P", 50.2655, 0.0001],
    ["10.5P", 364.4247, 0.0001],
    ["4.5P", 63.6173, 0.0001],
    ["4P", 240.3318, 0.0001],
    ["R1", 133.5177, 0.0001],
    ["R2", 939.3362, 0.0001],
    ["R3", 769.6902, 0.0001],
    // p84 (out of order: edits previous program)
    ["gP"],
    ["G_020",   "020-44.40. 3"],
    ["\b",      "019-40"],
    ["gTgTgT",  "016-45. 4"],
    ["\b",      "015-20"],
    ["R2",      "016-45. 2"],
    ["G_011",   "011-44.40. 2"],
    ["\b",      "010-42.31"],
    ["gTgT",    "008-31"],
    ["\b",      "007-44.40. 1"],
    ["R1",      "008-45. 1"],
    ["gT",      "007-44.40. 1"],
    ["\b",      "006-44. 4"],
    ["\b",      "005-20"],
    ["S2",      "006-44. 2"],
    // p86
    ["gP", function() { return !Prgm; }],
    ["fx"],
    ["Gq", function() { return PC === 1; }],
    ["8S1", 8],
    ["2.5", 2.5],
    ["T", 2.5],
    ["T", function() { return Reg[0] === 2.5; }],
    ["T", 6.25],
    ["T", 3.1416, 0.0001],
    ["T", 19.6350, 0.0001],
    // p80
    ["gPfr", "000-"],
    ["fTE", "001-42.21.12"],
    ["5",   "002- 5"],
    ["*",   "003-20"],
    ["2",   "004- 2"],
    ["+",   "005-40"],
    ["*",   "006-20"],
    ["*",   "007-20"],
    ["*",   "008-20"],
    ["gU",  "009-43.32"],
    ["gP"],
    ["7\r\r\r", 7],
    ["fE", 12691],
    // p93
    ["gPfr","000-"],
    ["fTq", "001-42.21.11"],
    ["R0",  "002-45. 0"],
    ["fP",  "003-42.31"],
    ["8",   "004- 8"],
    ["/",   "005-10"],
    ["_",   "006-16"],
    ["2",   "007- 2"],
    ["x",   "008-34"],
    ["^",   "009-14"],
    ["R*1", "010-45.20. 1"],
    ["fP",  "011-42.31"],
    ["R2",  "012-45. 2"],
    ["g-9", "013-43.30. 9"],
    ["gU",  "014-43.32"],
    ["3",   "015- 3"],
    ["S+0", "016-44.40. 0"],
    ["Gq",  "017-22.11"],
    ["gP"],
    ["2S0", 2],
    ["100S1", 100],
    ["50S2", 50],
    ["fq", 50],
    // p96
    ["gPfr","000-"],
    ["fTE", "001-42.21.12"],
    ["g50", "002-43. 5. 0"],
    ["G1",  "003-22. 1"],
    ["fT?", "004-42.21.15"],
    ["g40", "005-43. 4. 0"],
    ["fT1", "006-42.21. 1"],
    ["S1",  "007-44. 1"],
    ["1",   "008- 1"],
    ["+",   "009-40"],
    ["x",   "010-34"],
    ["_",   "011-16"],
    ["^",   "012-14"],
    ["_",   "013-16"],
    ["1",   "014- 1"],
    ["+",   "015-40"],
    ["R/1", "016-45.10. 1"],
    ["*",   "017-20"],
    ["g60", "018-43. 6. 0"],
    ["gU",  "019-43.32"],
    ["R1",  "020-45. 1"],
    ["1",   "021- 1"],
    ["+",   "022-40"],
    ["*",   "023-20"],
    ["gU",  "024-43.32"],
    ["gP"],
    ["250\r", 250],
    ["48\r", 48],
    [".005", 0.005],
    ["fE", 10698.3049, 0.0001],
    ["250\r", 250],
    ["48\r", 48],
    [".005", 0.005],
    ["f?", 10645.0795, 0.0001],
    // p103
    ["gPfrfT9g8S0xS-0U.3_xU.3+R/0gUfT.3gqg\rs-gUgP"],
    ["0.52\r1.25U9", 1.1507, 0.0001],
    ["1_\r1U9", -0.8415, 0.0001],
    ["0.81\r0.98U9", 1.1652, 0.0001],
    // p104
    ["gPfrfT.4gqU.5U.5U.5qgUfT.5xgq+gUgP"],
    ["8\r1.3\r7.9\r4.3U.4", 12.1074, 0.0001],
    // p111
    ["fx12.3456", 12.3456],
    ["St", 12.3456],
    ["7q", 2.6458, 0.0001],
    ["Sc", function() { return Reg[12] === Stack[0]; }],
    ["Rt", 12.3456],
    ["Rc", 2.6458, 0.0001],
    ["f4.2", 2.6458, 0.0001],
    // p112
    ["f4t", 12.3456],
    ["Rt", 2.6458, 0.0001],
    ["f4c", 0],
    ["Rc", 2.6458, 0.0001],
    ["f42", 2.6458, 0.0001],
    ["10S+t", 10],
    ["Rt", 12.6458, 0.0001],
    ["geS/c", 3.1416, 0.0001],
    ["Rc", 0.8422, 0.0001],
    ["f4.2", 0.8422, 0.0001],
    // p113
    ["gPfrfTqR0fP8/_2x^R*1fPR2g-9gU3S+0GqgP"],
    ["gP"],
    ["G_013",   "013-43.30. 9"],
    ["\b\b",    "011-42.31"],
    ["f52",     "012-42. 5. 2"],
    ["Gt",      "013-22.25"],
    ["gP"],
    ["2S0", 2],
    ["100S1", 100],
    ["3.00001S2", 3.00001],
    ["15_St", -15],
    ["fq", 50],
    // p114
    ["gPfrfTE9StfT0f7tRtfPf5tG0g-1G0gUgP"],
    ["fE", 0],

    // Part III Advanced Functions
    // p121
    ["2\r3I4\r5I+", new Complex(6, 8)],
    ["\b8f-\b9gq", new Complex(17, 144)],
    ["1.2\r4.7I2.7\r3.2I/q", new Complex(1.0491, 0.2406), 0.0001],
    // ["2.404gs", new Complex(1.5708, -1.5239), 0.0001],
    // p135
    ["g72\r65If1", 0.8452, 0.0001],
    ["3\r40If1", 2.2981, 0.0001],
    ["+", 3.1434, 0.0001],
    ["g1", new Complex(4.8863, 49.9612), 0.0001],
    // p136
    ["2f-", 0],
    ["8_\r", -8],
    ["6I", -8],
    ["3^", 352],
    ["*", -1872],
    ["4\r", 4],
    ["5q", 2.2361, 0.0001],
    ["2_*", -4.4721, 0.0001],
    ["I", 4],
    ["/", -295.4551, 0.0001],
    ["2\r5q", 2.2361, 0.0001],
    ["4_*", -8.9443, 0.0001],
    ["I", 2],
    ["/", new Complex(9.3982, -35.1344), 0.0001],
    ["g58"],
    // p139
    ["2\rfsq", 2],
    ["f_1", 2],
    ["fR", function() { return User; }],
    ["3.8Sq", "A\t1,1"],
    ["7.2Sq", 7.2],
    ["1.3Sq", 1.3],
    [".9_Sq", -0.9],
    ["2\r1fsE", 1],
    ["16.5SE", 16.5],
    ["22.1_SE", -22.1],
    ["fe)", -22.1],
    ["R_E", new MatrixCheck(B, 2, 1)],
    ["R_q", new MatrixCheck(A, 2, 2)],
    /*["/", new MatrixCheck(C, 2, 1)],
    ["R)", -11.2887],
    ["R)", 8.2496],*/
    ["fR", function() { return !User; }],
    ["f_0"],
    // p142
    ["2\r", 2],
    ["3", 3],
    ["fsq", 3],
    ["R_E", new MatrixCheck(B, 0, 0)],
    ["Rsq", [3, 2]],
    // p145
    ["f_1", function() { return Reg[0] === 1 && Reg[1] === 1; }],
    ["fR", function() { return User; }],
    ["1Sq", 1],
    ["2Sq", 2],
    ["3Sq", 3],
    ["4Sq", 4],
    ["5Sq", 5],
    ["6Sq", 6],
    ["Rq", 1],
    ["Rq", 2],
    ["Rq", 3],
    ["Rq", 4],
    ["Rq", 5],
    ["Rq", 6],
    ["fR", 6],
    // p146
    ["2S0", 2],
    ["3S1", 3],
    ["9", 9],
    ["Sq", function() { return g_Matrix[0].get(2, 3) === 9; }],
    // p147
    ["2\r1", 1],
    ["Rgq", 4],
    // p181
    ["gPfr","000-"],
    ["fT0", "001-42.21. 0"],
    ["3",   "002- 3"],
    ["-",   "003-30"],
    ["*",   "004-20"],
    ["1",   "005- 1"],
    ["0",   "006- 0"],
    ["-",   "007-30"],
    ["gU",  "008-43.32"],
    ["gP"],
    ["0\r", 0],
    ["10", 10],
    ["f/0", 5],
    ["r", 5],
    ["r", 0],
    ["0\r", 0],
    ["10_", -10],
    ["f/0", -2],
    ["r", -2],
    ["r", 0],
    // p184
    ["gPfr","000-"],
    ["fTq", "001-42.21.11"],
    ["2",   "002- 2"],
    ["0",   "003- 0"],
    ["/",   "004-10"],
    ["_",   "005-16"],
    ["E",   "006-12"],
    ["_",   "007-16"],
    ["1",   "008- 1"],
    ["+",   "009-40"],
    ["5",   "010- 5"],
    ["0",   "011- 0"],
    ["0",   "012- 0"],
    ["0",   "013- 0"],
    ["*",   "014-20"],
    ["x",   "015-34"],
    ["2",   "016- 2"],
    ["0",   "017- 0"],
    ["0",   "018- 0"],
    ["*",   "019-20"],
    ["-",   "020-30"],
    ["gU",  "021-43.32"],
    ["gP"],
    ["5\r", 5],
    ["6", 6],
    ["f/q", 9.2843, 0.0001],
    ["r", 9.2843, 0.0001],
    ["r", 0],
    // p186
    ["gPfr","000-"],
    ["fT1", "001-42.21. 1"],
    ["g_",  "002-43.16"],
    ["1",   "003- 1"],
    ["+",   "004-40"],
    ["gU",  "005-43.32"],
    ["gP"],
    ["1\r", 1],
    ["1_", -1],
    ["f/1", "Error 8"],

    // Page references from HP-15C Advanced Functions Handbook (November 1985)
    // p66
    ["gPfr","000-"],
    ["fTq", "001-42.21.11"],
    ["6",   "002- 6"],
    ["St",  "003-44.25"],
    ["x",   "004-34"],
    ["\r",  "005-36"],
    ["\r",  "006-36"],
    ["\r",  "007-36"],
    ["R6",  "008-45. 6"],
    ["fT1", "009-42.21. 1"],
    ["+",   "010-40"],
    ["Rc",  "011-45.24"],
    ["x",   "012-34"],
    ["/",   "013-10"],
    ["f5t", "014-42. 5.25"],
    ["G1",  "015-22. 1"],
    ["R0",  "016-45. 0"],
    ["+",   "017-40"],
    ["x",   "018-34"],
    ["-",   "019-30"],
    ["g\r", "020-43.36"],
    ["gE",  "021-43.12"],
    ["g\r", "022-43.36"],
    [".",   "023-48"],
    ["5",   "024- 5"],
    ["-",   "025-30"],
    ["*",   "026-20"],
    ["+",   "027-40"],
    ["gU",  "028-43.32"],
    ["gP"],
    ["2p*", 6.2832, 0.0001],
    ["gE2/", 0.9189, 0.0001],
    ["S0", 0.9189, 0.0001],
    ["12?S1", 0.0833, 0.001],
    ["30?S2", 0.0333, 0.002],
    ["53\r210/S3", 0.2524, 0.0001],
    ["195\r371/S4", 0.5256, 0.0001],
    ["1.011523068S5", 1.0115, 0.0001],
    ["1.517473649S6", 1.5175, 0.0001],
    ["4.2fq", 2.0486, 0.0001],
    ["f79", 2.048555637, 1e-9],
    ["3.2f0", 7.756689536, 1e-9],
    ["gE", 2.048555637, 1e-9],
    ["1\r", 1],
    ["5I", new Complex(1, 5)],
    ["fq", new Complex(-6.130324145, 3.815898575), 1e-9],
    // p76
    ["gPfr","000-"],
    ["fT^", "001-42.21.14"],
    ["f_1", "002-42.16. 1"],
    ["S0",  "003-44. 0"],
    ["r",   "004-33"],
    ["0",   "005- 0"],
    ["+",   "006-40"],
    ["fRS)","007u44.13"],
    ["fR"],
    ["f-",  "008-42.30"],
    ["S)",  "009-44.13"],
    ["f-",  "010-42.30"],
    ["gU",  "011-43.32"],
    ["fT?", "012-42.21.15"],
    ["S0",  "013-44. 0"],
    ["g\b", "014-43.35"],
    ["2",   "015- 2"],
    ["S1",  "016-44. 1"],
    ["r",   "017-33"],
    ["0",   "018- 0"],
    ["+",   "019-40"],
    ["R)",  "020-45.13"],
    ["f-",  "021-42.30"],
    ["f51", "022-42. 5. 1"],
    ["g\b", "023-43.35"],
    ["R)",  "024-45.13"],
    ["gU",  "025-43.32"],
    ["gP"],
    ["5\r2", 2],
    ["fs)", 2],
    ["2\r3I", new Complex(2, 3)],
    ["1f^", 2],
    ["7\r4I", new Complex(7, 4)],
    ["2f^", 7],
    ["1f?", new Complex(2, 3)],
    ["2f?", new Complex(7, 4)],
    ["+", new Complex(9, 7)],
    // p78
    ["gPfr","000-"],
    ["fTq", "001-42.21.11"],
    ["x",   "002-34"],
    ["?",   "003-15"],
    ["g\r", "004-43.36"],
    ["r",   "005-33"],
    ["g48", "006-43. 4. 8"],
    ["^",   "007-14"],
    ["S2",  "008-44. 2"],
    ["f-",  "009-42.30"],
    ["S3",  "010-44. 3"],
    ["3",   "011- 3"],
    ["6",   "012- 6"],
    ["0",   "013- 0"],
    ["gr",  "014-43.33"],
    ["/",   "015-10"],
    ["S4",  "016-44. 4"],
    ["0",   "017- 0"],
    ["St",  "018-44.25"],
    ["fT0", "019-42.21. 0"],
    ["R4",  "020-45. 4"],
    ["R*t", "021-45.20.25"],
    ["f-",  "022-42.30"],
    ["g\b", "023-43.35"],
    ["1",   "024- 1"],
    ["g7",  "025-43. 7"],
    ["f1",  "026-42. 1"],
    ["R2",  "027-45. 2"],
    ["R3",  "028-45. 3"],
    ["ft",  "029-42.25"],
    ["*",   "030-20"],
    ["Rt",  "031-45.25"],
    ["x",   "032-34"],
    ["1",   "033- 1"],
    ["S+t", "034-44.40.25"],
    ["r",   "035-33"],
    ["P",   "036-31"],
    ["G0",  "037-22. 0"],
    ["gP"],
    ["100\r1", 1],
    ["fq", new Complex(1, 0)],
    ["P", new Complex(0.9980, 0.0628), 0.001],
    ["50St", 50],
    ["P", new Complex(-1, 0), 0.0001],

    // http://en.wikipedia.org/wiki/Gamma_function#Particular_values
    ["5\r2/_1-f0", -0.945, 0.001],
    ["3\r2/_1-f0", 2.363, 0.001],
    ["1\r2/_1-f0", -3.545, 0.001],
    ["1\r2/1-f0", 1.772, 0.001],
    ["0f0", 1, 0.001],
    ["3\r2/1-f0", 0.886, 0.001],
    ["1f0", 1, 0.001],
    ["5\r2/1-f0", 1.329, 0.001],
    ["2f0", 2, 0.001],
    ["7\r2/1-f0", 3.323, 0.001],
    ["3f0", 6, 0.001],
];

function Complex(real, imag) {
    this.re = real;
    this.im = imag;

    this.toString = function() {
        return "(" + this.re + "," + this.im + ")";
    }
}

function MatrixCheck(label, rows, cols) {
    this.label = label;
    this.rows = rows;
    this.cols = cols;

    this.toString = function() {
        return "<MatrixCheck " + this.label + " " + this.rows + "," + this.cols + ">";
    };
}

function verify(test, result, resulti, expected) {
    tolerance = function(r, e, t) {
        if (e === 0) {
            return Math.abs(r) < t;
        } else {
            return Math.abs(r / e - 1) < t;
        }
    };
    if (expected instanceof MatrixCheck) {
        return result instanceof Descriptor
            && result.label === expected.label
            && g_Matrix[result.label].rows === expected.rows
            && g_Matrix[result.label].cols === expected.cols;
    } else if (expected instanceof Complex) {
        if (test.length >= 3) {
            return tolerance(result, expected.re, test[2])
                && tolerance(resulti, expected.im, test[2]);
        } else {
            return result === expected.re && resulti === expected.im;
        }
    } else {
        if (test.length >= 3) {
            return tolerance(result, expected, test[2]);
        } else {
            return result === expected;
        }
    }
}

if ($("#testlog").length === 0) {
    $("body").append('<div><textarea id="testlog" cols="80" rows="10"></textarea></div>');
}

key('f'); key('7'); key('4');
var oldalert = alert;
var log = function(msg) { $("#testlog").append(msg + "\n"); };
//alert = function(msg) { log(msg); };
var pass = true;
for (var t in Tests) {
    var test = Tests[t];
    var keys = test[0];
    log(keys);
    for (var i = 0; i < keys.length; i++) {
        key(keys.substr(i, 1));
        while (Running) {
            if (RunTimer !== null) {
                clearTimeout(RunTimer);
                RunTimer = null;
            }
            var p = PC;
            if (p === 0) {
                p = 1;
            }
            log(sprintf("%03d-%s", p, Program[p].info.keys));
            step();
        }
    }
    if (test.length > 1) {
        var expected = test[1];
        if (typeof(expected) === "string") {
            if (expected !== LcdDisplay) {
                alert("fail: " + keys + "\nresult: " + LcdDisplay + "\nexpected: " + expected);
                pass = false;
            }
        } else if (typeof(expected) === "function") {
            if (!expected()) {
                alert("fail: " + keys + "\nresult: " + LcdDisplay + "\nexpected: " + expected);
                pass = false;
            }
        } else {
            if (!$.isArray(expected)) {
                expected = [expected];
            }
            for (var i in expected) {
                if (!verify(test, Stack[i], StackI[i], expected[i])) {
                    alert("fail: " + keys + "\nresult: " + Stack[i] + "\nexpected: " + expected[i] + "\ndiff: " + Math.abs(Stack[i] / expected[i] - 1));
                    pass = false;
                }
            }
        }
    }
    if (!pass) {
        break;
    }
}
alert = oldalert;
if (pass) {
    alert("pass");
}
