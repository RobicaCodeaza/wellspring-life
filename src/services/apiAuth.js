import supabase from './supabase';
import { supabaseUrl } from './supabase.js';

export async function signup({ fullName, email, password }) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        fullName,
        avatar: '',
      },
    },
  });

  return { data, error };
}

export async function login({ email, password }) {
  let { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) throw new Error(error.message);

  return data;
}

export async function getCurrentUser() {
  const { data: session } = await supabase.auth.getSession();

  // If there is no user
  if (!session.session) return null;

  const { data, error } = await supabase.auth.getUser();

  // console.log('getCurrentData');

  if (error) throw new Error(error.message);

  return data?.user;
}

export async function logoutUser() {
  const { error } = await supabase.auth.signOut();

  if (error) throw new Error(error.message);
}

export async function updateCurrentUser({ password, fullName, avatar }) {
  // 1.Update Password or Full Name

  let updateData;
  if (password) updateData = { password };
  if (fullName) updateData = { data: { fullName } };
  const { data, error } = await supabase.auth.updateUser(updateData);

  if (error) throw new Error(error.message);

  if (!avatar) return data;

  // 2.Update avatar in the user
  // https://bihkddkrwrcobzmfkrgr.supabase.co/storage/v1/object/public/avatars/pexels-fox-1172675.jpg
  const fileName = `avatar-${data.user.id}-${Math.random()}`;
  const { data: updatedUser, error: errorUpdatingAvatar } =
    await supabase.auth.updateUser({
      data: {
        avatar: `${supabaseUrl}/storage/v1/object/public/avatars/${fileName}`,
      },
    });

  if (errorUpdatingAvatar) throw new Error(errorUpdatingAvatar.message);

  // 3.Upload the avatar image
  // console.log(avatar);
  const { error: storageError } = await supabase.storage
    .from('avatars')
    .upload(fileName, avatar);

  if (storageError) throw new Error(storageError.message);

  return updatedUser;
}
