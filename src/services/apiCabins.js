import supabase from './supabase';
import { supabaseUrl } from './supabase';
export async function getCabins() {
  let { data, error } = await supabase.from('cabins').select('*');

  if (error) {
    console.error(error);
    throw new Error('Cabins could not be loaded');
  }

  return data;
}

export async function createEditCabin(newCabin, id) {
  const hasImagePath = newCabin.image?.startsWith?.(supabaseUrl);
  const imageName = `${Math.random()}-${newCabin.image.name}`.replace('/', '');
  const imagePath = hasImagePath
    ? newCabin.image
    : `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;
  console.log(imagePath);
  // https://bihkddkrwrcobzmfkrgr.supabase.co/storage/v1/object/public/cabin-images/cabin-002.jpg

  //1.Create Cabin
  let query = supabase.from('cabins');

  //A - CREATE
  if (!id) {
    query = query.insert([{ ...newCabin, image: imagePath }]);
  }
  //B - EDIT
  if (id) {
    query = query
      .update({ ...newCabin, image: imagePath })
      .eq('id', id)
      .select();
  }

  const { data, error } = await query.select().single();

  if (error) {
    console.error(error);
    throw new Error('Cabins could not be created');
  }

  //2.Upload image
  if (hasImagePath) return data;
  const { error: storageError } = await supabase.storage
    .from('cabin-images')
    .upload(imageName, newCabin.image);

  //3.Delete the cabin If there was an error uploading
  if (storageError) {
    console.log(storageError);
    const { data, error } = await supabase
      .from('cabins')
      .delete()
      .eq('id', data.id);
    throw new Error(
      'Cabin Image could not be uploaded and the cabin was not created'
    );
  }

  return data;
}

export async function deleteCabin(id) {
  const { error } = await supabase.from('cabins').delete().eq('id', id);

  if (error) {
    console.error(error);
    throw new Error('Cabins could not be deleted');
  }
}
