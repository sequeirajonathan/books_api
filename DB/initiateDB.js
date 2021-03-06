let db = `CREATE DATABASE IF NOT EXISTS books;`;
let author = `CREATE TABLE IF NOT EXISTS Author (authorNum DECIMAL(2,0) PRIMARY KEY,authorLast CHAR(12),authorFirst CHAR(10) );`;
let book = `CREATE TABLE IF NOT EXISTS Book (bookCode CHAR(4) PRIMARY KEY,title CHAR(40),publisherCode CHAR(3),type CHAR(3),paperback CHAR(1),url VARCHAR(255));`;
let branch = `CREATE TABLE IF NOT EXISTS Branch (branchNum DECIMAL(2,0) PRIMARY KEY,branchName CHAR(50),branchLocation CHAR(50) );`;
let copy = `CREATE TABLE IF NOT EXISTS Copy(bookCode CHAR(4),branchNum DECIMAL(2,0),copyNum DECIMAL(2,0),quality CHAR(20),price DECIMAL(8,2),PRIMARY KEY (bookCode, branchNum, copyNum) );`;
let publisher = `CREATE TABLE IF NOT EXISTS Publisher (publisherCode CHAR(3) PRIMARY KEY,publisherName CHAR(25),city CHAR(20) );`;
let wrote = `CREATE TABLE IF NOT EXISTS Wrote (bookCode CHAR(4),authorNum DECIMAL(2,0),sequence DECIMAL(2,0),PRIMARY KEY (bookCode, authorNum) );`;
let inventory = `CREATE TABLE IF NOT EXISTS Inventory( BookCode CHAR(4) not null,BranchNum DECIMAL(2,0) not null,OnHand DECIMAL(2,0),
constraint Invent_pk
primary key(BookCode, BranchNum),
constraint InventBranch_fk
foreign key (BranchNum) references Branch(branchNum)
);`;
let user = `CREATE TABLE IF NOT EXISTS User ( id int NOT NULL AUTO_INCREMENT,email VARCHAR(255) not null,password VARCHAR(255), PRIMARY KEY(id));`;

let insertAuthor = `INSERT INTO Author
VALUES
(1,'Morrison','Toni'),
(2,'Solotaroff','Paul'),
(3,'Vintage','Vernor'),
(4,'Francis','Dick'),
(5,'Straub','Peter'),
(6,'King','Stephen'),
(7,'Pratt','Philip'),
(8,'Chase','Truddi'),
(9,'Collins','Bradley'),
(10,'Heller','Joseph'),
(11,'Wills','Gary'),
(12,'Hofstadter','Douglas R.'),
(13,'Lee','Harper'),
(14,'Ambrose','Stephen E.'),
(15,'Rowling','J.K.'),
(16,'Salinger','J.D.'),
(17,'Heaney','Seamus'),
(18,'Camus','Albert'),
(19,'Collins, Jr.','Bradley'),
(20,'Steinbeck','John'),
(21,'Castelman','Riva'),
(22,'Owen','Barbara'),
(23,'O''Rourke','Randy'),
(24,'Kidder','Tracy'),
(25,'Schleining','Lon');`;

let insertBooks = `
INSERT INTO Book
VALUES
('138X','Beloved','PL','FIC','Y','https://m.media-amazon.com/images/I/41Rdzbiqh7L._SL160_.jpg'),
('2226','Harry Potter and the Prisoner of Azkaban','ST','SFI','N','https://images.isbndb.com/covers/06/11/9781439520611.jpg'),
('2281','Van Gogh and Gauguin','WP','ART','N','https://m.media-amazon.com/images/I/51CWDQf8xOL._SL160_.jpg'),
('2766','Of Mice and Men','PE','FIC','Y','https://m.media-amazon.com/images/I/41uqpdzU9hL._SL160_.jpg'),
('2908','Electric Light','FS','POE','N','https://m.media-amazon.com/images/I/41SYHc02kXL._SL160_.jpg'),
('3350','Group: Six People in Search of a Life','BP','PSY','Y', 'https://images.isbndb.com/covers/66/49/9780140286649.jpg'),
('3743','Nine Stories','LB','FIC','Y','https://images.isbndb.com/covers/49/59/9780553114959.jpg'),
('3906','The Soul of a New Machine','BY','SCI','Y','https://m.media-amazon.com/images/I/51zs8coc22L._SL160_.jpg'),
('5163','Travels with Charley','PE','TRA','Y','https://images.isbndb.com/covers/96/66/9780553029666.jpg'),
('5790','Catch-22','SC','FIC','Y','https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQGwhAFEzAdcJAnvi9G_BQH5CGfL5ZdQjvfFMseSM_7Yyw2zaaz3FScPgKiEsToHdNGSCBwvBG1&usqp=CAc'),
('6128','Jazz','PL','FIC','Y','https://m.media-amazon.com/images/I/41qcbsOPZbL._SL160_.jpg'),
('6328','Band of Brothers','TO','HIS','Y','https://m.media-amazon.com/images/I/51oZled1RiL._SL160_.jpg'),
('669X','A Guide to SQL','CT','CMP','Y', 'https://images.isbndb.com/covers/67/40/9780619216740.jpg'),
('6908','Franny and Zooey','LB','FIC','Y', 'https://m.media-amazon.com/images/I/41WxxnyABjL._SL160_.jpg'),
('7405','East of Eden','PE','FIC','Y', 'https://images.isbndb.com/covers/42/34/9780142004234.jpg'),
('7443','Harry Potter and the Goblet of Fire','ST','SFI','N', 'https://images.isbndb.com/covers/49/09/9780439554909.jpg'),
('7559','The Fall','VB','FIC','Y','https://m.media-amazon.com/images/I/41fTgRUHrGL._SL160_.jpg'),
('8092','Godel, Escher, Bach','BA','PHI','Y', 'https://m.media-amazon.com/images/I/41PoFs8fDZL._SL160_.jpg'),
('8720','When Rabbit Howls','JP','PSY','Y', 'https://m.media-amazon.com/images/I/51vu5hjJBPL._SL160_.jpg'),
('9611','Black House','RH','HOR','N','https://m.media-amazon.com/images/I/411-vun7rML._SL160_.jpg'),
('9627','Song of Solomon','PL','FIC','Y','https://m.media-amazon.com/images/I/41P-CfLMjwL._SL160_.jpg'),
('9701','The Grapes of Wrath','PE','FIC','Y','https://m.media-amazon.com/images/I/51zdzn8cO3L._SL160_.jpg'),
('9882','Slay Ride','JP','MYS','Y','https://m.media-amazon.com/images/I/51h85XY+VdL._SL160_.jpg'),
('9883','The Catcher in the Rye','LB','FIC','Y','https://m.media-amazon.com/images/I/51c43NGoVVL._SL160_.jpg'),
('9931','To Kill a Mockingbird','HC','FIC','N','https://m.media-amazon.com/images/I/51IXWZzlgSL._SL160_.jpg');`;

let insertBranch = `INSERT INTO Branch
VALUES
(1,'Henry Downtown','16 Riverview'),
(2,'Henry on the Hill','1289 Bedford'),
(3,'Henry Brentwood','Brentwood Mall'),
(4,'Henry Eastshore','Eastshore Mall');`;

let insertCopy = `INSERT INTO Copy
VALUES
('0180',1,1,'Excellent',7.19),
('0180',1,2,'Excellent',7.19),
('0189',2,1,'Excellent',7.99),
('0189',2,2,'Good',5.99),
('0200',1,1,'Excellent',8.00),
('0200',2,1,'Excellent',8.00),
('0200',2,2,'Fair',3.50),
('0200',2,3,'Poor',2.25),
('0378',3,1,'Excellent',24.50),
('0378',3,2,'Excellent',24.50),
('079X',2,1,'Excellent',25.95),
('079X',3,1,'Excellent',25.95),
('079X',3,2,'Good',19.95),
('079X',4,1,'Excellent',25.95),
('079X',4,2,'Excellent',25.95),
('079X',4,3,'Good',19.95),
('0808',2,1,'Excellent',7.99),
('1351',2,1,'Excellent',21.95),
('1351',2,2,'Excellent',21.95),
('1351',2,3,'Excellent',21.95),
('1351',2,4,'Excellent',21.95),
('1351',3,1,'Excellent',21.95),
('1351',3,2,'Good',13.95),
('1382',2,1,'Good',34.50),
('138X',2,1,'Excellent',12.95),
('138X',2,2,'Excellent',12.95),
('138X',2,3,'Good',6.95),
('2226',1,1,'Excellent',14.96),
('2226',1,2,'Excellent',14.96),
('2226',1,3,'Good',8.95),
('2226',3,1,'Excellent',14.95),
('2226',3,2,'Excellent',14.95),
('2226',4,1,'Fair',3.95),
('2281',4,1,'Excellent',21.00),
('2766',3,1,'Excellent',7.95),
('2766',3,2,'Good',3.95),
('2908',1,1,'Excellent',14.95),
('2908',1,2,'Excellent',14.95),
('2908',1,3,'Good',8.50),
('2908',4,1,'Good',8.50),
('3350',1,1,'Excellent',10.40),
('3350',1,2,'Excellent',10.40),
('3743',2,1,'Excellent',5.99),
('3906',2,1,'Excellent',12.16),
('3906',3,1,'Excellent',12.16),
('3906',3,2,'Good',4.50),
('5163',1,1,'Excellent',7.95),
('5790',4,1,'Excellent',12.00),
('5790',4,2,'Good',5.95),
('6128',2,1,'Excellent',12.95),
('6128',2,2,'Excellent',12.95),
('6128',2,3,'Excellent',12.95),
('6128',2,4,'Excellent',12.95),
('6128',3,1,'Excellent',12.95),
('6128',3,2,'Excellent',12.95),
('6128',3,3,'Good',4.75),
('6328',2,1,'Excellent',9.95),
('6328',2,2,'Excellent',9.95),
('669X',1,1,'Excellent',39.95),
('669X',2,1,'Excellent',39.95),
('6908',2,1,'Excellent',5.99),
('6908',2,2,'Excellent',5.99),
('7405',3,1,'Good',5.00),
('7405',3,2,'Fair',2.95),
('7443',4,1,'Good',9.25),
('7559',2,1,'Fair',3.65),
('7559',2,2,'Good',8.00),
('8092',3,1,'Good',9.50),
('8720',1,1,'Excellent',6.29),
('8720',1,2,'Excellent',6.29),
('8720',1,3,'Good',3.95),
('9611',1,1,'Excellent',18.81),
('9611',1,2,'Good',8.25),
('9627',3,1,'Excellent',14.00),
('9627',3,2,'Excellent',14.00),
('9627',3,3,'Excellent',14.00),
('9627',3,4,'Excellent',14.00),
('9627',3,5,'Good',6.50),
('9627',4,1,'Excellent',14.00),
('9627',4,2,'Good',6.50),
('9701',1,1,'Excellent',13.00),
('9701',1,2,'Excellent',13.00),
('9701',2,1,'Excellent',13.00),
('9701',3,1,'Fair',4.00),
('9701',3,2,'Fair',4.00),
('9701',3,3,'Good',7.25),
('9701',4,1,'Excellent',13.00),
('9701',4,2,'Poor',1.55),
('9882',3,1,'Excellent',6.99),
('9882',3,2,'Good',3.75),
('9882',3,3,'Excellent',6.99),
('9883',2,1,'Excellent',5.99),
('9883',2,2,'Excellent',5.99),
('9883',2,3,'Fair',1.95),
('9883',4,1,'Good',3.99),
('9883',4,2,'Excellent',5.99),
('9931',1,1,'Excellent',13.00),
('9931',1,2,'Excellent',13.00);`;

let insertPublisher = `INSERT INTO Publisher
VALUES
('AH','Arkham House','Sauk City WI'),
('AP','Arcade Publishing','New York'),
('BA','Basic Books','Boulder CO'),
('BP','Berkley Publishing','Boston'),
('BY','Back Bay Books','New York'),
('CT','Course Technology','Boston'),
('FA','Fawcett Books','New York'),
('FS','Farrar Straus and Giroux','New York'),
('HC','HarperCollins Publishers','New York'),
('JP','Jove Publications','New York'),
('JT','Jeremy P. Tarcher','Los Angeles'),
('LB','Lb Books','New York'),
('MP','McPherson and Co.','Kingston'),
('PE','Penguin USA','New York'),
('PL','Plume','New York'),
('PU','Putnam Publishing Group','New York'),
('RH','Random House','New York'),
('SB','Schoken Books','New York'),
('SC','Scribner','New York'),
('SS','Simon and Schuster','New York'),
('ST','Scholastic Trade','New York'),
('TA','Taunton Press','Newtown CT'),
('TB','Tor Books','New York'),
('TH','Thames and Hudson','New York'),
('TO','Touchstone Books','Westport CT'),
('VB','Vintage Books','New York'),
('WN','W.W. Norton','New York'),
('WP','Westview Press','Boulder CO');`;

let insertWrote = `INSERT INTO Wrote
VALUES
('0180',3,1),
('0189',5,1),
('0200',18,1),
('0378',11,1),
('079X',4,1),
('0808',4,1),
('1351',6,1),
('1382',23,2),
('1382',25,1),
('138X',1,1),
('2226',15,1),
('2281',9,2),
('2281',19,1),
('2766',20,1),
('2908',17,1),
('3350',2,1),
('3743',16,1),
('3906',24,1),
('5163',20,1),
('5790',10,1),
('6128',1,1),
('6328',14,1),
('669X',7,1),
('6908',16,1),
('7405',20,1),
('7443',15,1),
('7559',18,1),
('8092',12,1),
('8720',8,1),
('9611',5,2),
('9611',6,1),
('9627',1,1),
('9701',20,1),
('9882',4,1),
('9883',16,1),
('9931',13,1);
`;

let insertInventory = `INSERT INTO Inventory
VALUES
('0180',1,2),
('0189',2,2),
('0200',1,1),
('0200',2,3),
('0378',3,2),
('079X',2,1),
('079X',3,2),
('079X',4,3),
('0808',2,1),
('1351',2,4),
('1351',3,2),
('1382',2,1),
('138X',2,3),
('2226',1,3),
('2226',3,2),
('2226',4,1),
('2281',4,3),
('2766',3,2),
('2908',1,3),
('2908',4,1),
('3350',1,2),
('3743',2,1),
('3906',2,1),
('3906',3,2),
('5163',1,1),
('5790',4,2),
('6128',2,4),
('6128',3,3),
('6328',2,2),
('669X',1,1),
('6908',2,2),
('7405',3,2),
('7443',4,1),
('7559',2,2),
('8092',3,1),
('8720',1,3),
('9611',1,2),
('9627',3,5),
('9627',4,2),
('9701',1,2),
('9701',2,1),
('9701',3,3),
('9701',4,2),
('9882',3,3),
('9883',2,3),
('9883',4,2),
('9931',1,2);`;

const SQL = {
    EXECUTIONORDER: {
      db,
      user,
      author,
      book,
      branch,
      copy,
      publisher,
      wrote,
      inventory
  },
    INSERTORDER: {
      insertAuthor,
      insertBooks,
      insertBranch,
      insertCopy,
      insertPublisher,
      insertWrote,
      insertInventory
    }
  };
  

module.exports = SQL;
