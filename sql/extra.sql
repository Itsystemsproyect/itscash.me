-- Cambiar el rol a admin
UPDATE usuario SET rol='admin' WHERE email='felix@gmail.com';

-- Cambiar validado a TRUE
UPDATE usuario SET validado=TRUE WHERE email='alberto@gmail.com';

UPDATE usuario SET validado=TRUE WHERE id=1;


-- Agregar código de referido a los usuarios que están en la base de datos
UPDATE usuario SET referido='ZD0Kq5gShTN8j012BQQFF' WHERE id=1;
UPDATE usuario SET referido='1fan1a7WMBGytdTvwPKfr' WHERE id=2;
UPDATE usuario SET referido='bO8YtRxVCjBdT1J4d-cOb' WHERE id=3;
UPDATE usuario SET referido='TzL2TLQzuwGnPvpXWQgQZ' WHERE id=4;
UPDATE usuario SET referido='OF7doqQ87om0KavD9dsHz' WHERE id=5;
UPDATE usuario SET referido='NLxnvyjEN5sJjvGQzMtQd' WHERE id=6;
UPDATE usuario SET referido='cxxb08DvhmPfT5MLXs0Er' WHERE id=7;
UPDATE usuario SET referido='8w3GiG3Ivq7eK2yqQV1tq' WHERE id=8;
UPDATE usuario SET referido='2mKdnH7yAx1xomD4rfqen' WHERE id=9;
UPDATE usuario SET referido='F5nPCtHGNsgGsCa2mO4Es' WHERE id=10;
UPDATE usuario SET referido='6kScgFDzRiaNdSh6ToLTG' WHERE id=11;
UPDATE usuario SET referido='lhETAUvAF9pkmlQh867xb' WHERE id=12;
UPDATE usuario SET referido='IOjcpYfDY6iNNAoytfITC' WHERE id=13;
UPDATE usuario SET referido='kKd07rM0PvO5UXw994vJE' WHERE id=14;
UPDATE usuario SET referido='J6HdK7yd_7PingjA3jzaK' WHERE id=15;
UPDATE usuario SET referido='2oK0tVVzzXiLzm33PU7sG' WHERE id=16;
UPDATE usuario SET referido='z_cJnZqnlYEZwAOJ1M9d5' WHERE id=17;
UPDATE usuario SET referido='6QGn4HcImdWCpIYmRhwue' WHERE id=18;

-- RESPALDAR BASE DE DATOS DESDE CONSOLA
pg_dump -U postgres -W -h localhost itsc > itsc.sql

-- Query para contar referidos por usuario
select e1.username, e1.wallet_address, e2.count from usuario e1, (select e1.referido_por, count('e2.username')
from usuario e1, usuario e2
where e1.referido_por = e2.referido and e1.creado_en > e2.fecha_pago group by e1.referido_por) e2
where e1.referido = e2.referido_por;



UPDATE usuario SET referido_por='b6AhNzHBo1prXDdLBa8u8' WHERE id=5;

UPDATE usuario SET wallet_address='ksdfwvkf2342kodsoe965' WHERE id=1;
UPDATE usuario SET wallet_address='smdgfeportspodfoweri7' WHERE id=2;
UPDATE usuario SET wallet_address='adsfwefhythfy75896ñpk' WHERE id=3;
UPDATE usuario SET wallet_address='iuwnefwqoubgirew23578' WHERE id=4;

-- Actualizar fecha de pago de un usuario
UPDATE usuario SET fecha_pago=current_timestamp WHERE id=3;


UPDATE usuario SET fecha_pago=to_timestamp(0) WHERE id=1;
UPDATE usuario SET fecha_pago=to_timestamp(0) WHERE id=2;
UPDATE usuario SET fecha_pago=to_timestamp(0) WHERE id=4;





