DELETE RECORDINGDATA where true;
DELETE RECORDING where true;
DELETE ATHLETE_STAFF where true;
DELETE USER where true;
DELETE USER_ROLE where true;

INSERT INTO USER_ROLE (ID ,NAME ) VALUES ('1','trainer'),('2','athlete');

INSERT INTO USER(ID ,NAME ,PASSWORD ,USERNAME, ROLE_ID, date_Of_Birth, gender, height, weight) VALUES ('1', 'name1', 'password', 'username1', ' 1', '24-01-2000', 'Male', '175', '65'), ('2', 'name2', 'password', 'username2', ' 2', '14-01-2001', 'Female', '165', '55'), ('3', 'name3', 'password', 'username3', '2', '28-02-1999', 'Male', '195', '95');

INSERT INTO ATHLETE_STAFF (ID ,ATHLETE_ID ,STAFF_ID ) VALUES  ('1', '2', '1'), ('2', '3', '1');

INSERT INTO RECORDING(RECORDINGID, DATE , ATHLETEID ) VALUES ('1', '2021-09-30','2'), ('2', '2021-10-01','2'),('3','2021-09-30','3');

INSERT INTO RECORDINGDATA(time, sensor1,sensor2,sensor3,sensor4, recordingID) SELECT * FROM CSVREAD('C:\Users\alvar\Documents\uni\4th year\IndustrialTeamProject\datasets\SensorTest-set2\all-sensors1.csv');
INSERT INTO RECORDINGDATA(time, sensor1,sensor2,sensor3,sensor4, recordingID) SELECT * FROM CSVREAD('C:\Users\alvar\Documents\uni\4th year\IndustrialTeamProject\datasets\SensorTest-set2\all-sensors2.csv');
INSERT INTO RECORDINGDATA(time, sensor1,sensor2,sensor3,sensor4, recordingID) SELECT * FROM CSVREAD('C:\Users\alvar\Documents\uni\4th year\IndustrialTeamProject\datasets\SensorTest-set2\all-sensors3.csv');

SELECT * FROM USER_ROLE;
SELECT * FROM USER;
SELECT * FROM ATHLETE_STAFF;
SELECT * FROM RECORDING;
SELECT * FROM RECORDINGDATA;