DELETE ATHLETE_STAFF where true;
DELETE RECORDINGDATA where true;
DELETE RECORDING where true;
DELETE USER where true;
DELETE USER_ROLE where true;


INSERT INTO USER_ROLE (ID ,NAME ) VALUES ('1','trainer'),('2','athlete');

INSERT INTO USER(ID ,NAME ,PASSWORD ,USERNAME, ROLE_ID) VALUES ('1', 'name1', 'password', 'username1', ' 1'), ('2', 'name2', 'password', 'username2', ' 2'), ('3', 'name3', 'password', 'username3', ' 2');

INSERT INTO ATHLETE_STAFF (ID ,ATHLETE_ID ,STAFF_ID ) VALUES  ('1', '2', '1'), ('2', '3', '1');

INSERT INTO RECORDING(RECORDINGID, ATHLETEID ) VALUES ('1','2'), ('2','3');

INSERT INTO RECORDINGDATA(time, sensor1,sensor2,sensor3,sensor4, recordingID) SELECT * FROM CSVREAD('C:\\Users\\alvar\\Documents\\uni\\4th year\\IndustrialTeamProject\\datasets\\SensorTest-set2\\all-sensors.csv');

SELECT * FROM USER_ROLE;
SELECT * FROM USER;
SELECT * FROM ATHLETE_STAFF;
SELECT * FROM RECORDING;
SELECT * FROM RECORDINGDATA;