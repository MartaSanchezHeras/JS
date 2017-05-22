function media()
{
  let total=0, res, numDatos, item;
  numDatos = arguments.length;
  for (item = 0; item < numDatos; item++)
    {
     total += arguments[item];
    }
  res = total/numDatos;
  return res;
} 




console.log(media(4,30,8,20));
