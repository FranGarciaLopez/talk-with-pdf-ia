<script>
          import { Alert } from "flowbite-svelte";
          import { APP_STATUS, appStatus } from "../store.ts";
          import StepUploading from "./StepUploading.svelte";
          import StepLoading from "./StepLoading.svelte";
          import StepChat from "./StepChat.svelte";
</script>

{#if $appStatus === APP_STATUS.INIT}
          <StepUploading />
{/if}
{#if $appStatus === APP_STATUS.LOADING}
          <StepLoading />
{/if}
{#if $appStatus === APP_STATUS.ERROR}
          <Alert>
                    <span class="font-medium">Algo malo ha pasado</span>
                    <span class="block sm:inline"
                              >Por favor, inténtalo de nuevo.</span
                    >
          </Alert>
{/if}
{#if $appStatus === APP_STATUS.SUCCESS}
          <p>Ask anything</p>
          <StepChat />
{/if}
