<?php

    namespace App\Traits;

    use Illuminate\Http\JsonResponse;
    trait ResponseTrait{
        /**
         * Display a listing of the resource.
         * @param array|object $data
         * @param string $message
         * @return \Illuminate\Http\Response
         */
        public function responseSuccess($data, $message="Successfull"): JsonResponse{
            return response()->json([
                'status'=> true,
                'message'=> $message,
                'data'=>$data,
                'error'=> null
            ]);
        }

        /**
         * Display a listing of the resource.
         * @param array|object $error
         * @param string $message
         * @param string $code
         * @return \Illuminate\Http\Response
         */
        public function responseFail($message="UnSuccessfull", $error, $code): JsonResponse{
            return response()->json([
                'status'=> false,
                'message'=> $message,
                'data'=>null,
                'error'=> $error
            ], $code);
        }
    }
?>