import type { Actions } from './$types';
import { prisma } from '$lib/server/prisma';
import { redirect } from '@sveltejs/kit';
import { CrewRepository } from '$lib/server/db/crew';

export const actions: Actions = {
  default: async ({ request, locals }) => {
    const formData = await request.formData();
    if (formData.get('addMember') !== null) {
      if (!locals.user || !locals.user.crewId) {
      return { error: "Vous devez être membre d'un équipage pour ajouter quelqu'un." };
    }

    const formData = await request.formData();
    const usernameToAdd = formData.get('username_to_add')?.toString();

    if (!usernameToAdd) {
      return { error: "Veuillez entrer un nom d'utilisateur." };
    }

    const userToAdd = await prisma.user.findUnique({
      where: { username: usernameToAdd }
    });

    console.log(userToAdd)

    if (!userToAdd) {
      return { error: "Utilisateur introuvable." };
    }

    await CrewRepository.addUserToCrew(
      locals.user.crewId,
      userToAdd.email
    )

    return { success: `Utilisateur ${usernameToAdd} ajouté à votre équipage !` };
  } else if (formData.get('createCrew') !== null) {
    if (!locals.user) {
          throw redirect(303, '/login'); // redirect if not logged in
        } else {

          const formData = await request.formData();
          const crewName = formData.get('crew_name')?.toString();
          const shipName = formData.get('ship_name')?.toString();

          if (!crewName || !shipName) {
            return { error: 'Please provide all required fields.' };
          }

          const crew = await CrewRepository.createCrewWithCaptain(
            locals.user.id,
            crewName,
            shipName
          )

          throw redirect(303, `/crew`);
        }
      }
  }
};

export function load({ locals }) {
console.log('locals.user:', locals.user);
  return {
    user: locals.user
  };
}